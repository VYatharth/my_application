import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import PrimarySemiRoundedButton from '../../components/Buttons/PrimarySemiRoundedButton';
import { QueryTextRequest } from '../../models';
import { QueryTextService } from './queryText.service';

const QueryText = () => {
  const queryClient = useQueryClient();
  const [response, setResponse] = useState('');

  const preProcessMutation = useMutation({
    mutationFn: async (data: QueryTextRequest) => {
      const response = await QueryTextService.preProcessText(data);
      return response;
    },
    onSuccess: (responseData: string) => {
      console.log(responseData);
      alert(responseData);
    },
    onError: (err: any) => {
      const errDetail = (err.body as any)?.detail;
      alert('Something went wrong.');
      console.error(`${errDetail}`);
    },
  });


  const handleQuery = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const requestData = { query: formData.get('question')?.toString() ?? '' };

    const response = await queryClient.fetchQuery({
      queryKey: ['question'],
      queryFn: async () => {
        return await QueryTextService.getQueryResponse(requestData);
      },
      staleTime: 0,
    });

    setResponse(response);
  };
  const handleTextProcessSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const requestData = { text_content: formData.get('textContent')?.toString() ?? '' };

    preProcessMutation.mutate(requestData);
  };

  const handleGetArticle = async () => {
    const response = await queryClient.fetchQuery({
      queryKey: ['question'],
      queryFn: async () => {
        const data = await QueryTextService.getArticle();
        return data;
      },
      staleTime: 0,
    });

    setResponse(response);
  };

  return (
    <div>
      <div>
        <form method='post' onSubmit={handleTextProcessSubmit}>
          <label>
            Enter your test to query from:
            <textarea name='textContent' rows={4} cols={40} />
          </label>
          <hr />
          <PrimarySemiRoundedButton key='text-process' label='Reset' type='reset'></PrimarySemiRoundedButton>

          <button
            className='bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'
            type='submit'
          >
            Process
          </button>
        </form>
      </div>

      <hr></hr>
      <hr></hr>
      <br />
      <br />
      <div>
        <form method='post' onSubmit={handleQuery}>
          <label>
            Enter your question:
            <textarea name='question' defaultValue='I really enjoyed biking yesterday!' rows={4} cols={40} />
          </label>
          <hr />
          <button
            type='reset'
            className='bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'
          >
            Reset edits
          </button>
          <button
            className='bg-primary border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'
            type='submit'
          >
            Save post
          </button>
        </form>
      </div>
      <hr></hr>
      <hr></hr>
      <br />
      <br />
      <div>{response}</div>
      <br />
      <br />
      <PrimarySemiRoundedButton key='model' label='Model' type='button' action={handleGetArticle}></PrimarySemiRoundedButton>
    </div>
  );
};

export default QueryText;
