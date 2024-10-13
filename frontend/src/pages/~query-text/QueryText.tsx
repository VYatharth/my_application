import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
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
    <section className='relative block py-24 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300'>
              <div className='flex-auto p-5 lg:p-10'>
                <h4 className='text-2xl font-semibold'>Utility to quickly scan a text and get your answers</h4>
                <p className='leading-relaxed mt-1 mb-4 text-gray-600'>This is a test utility for demo purpose only.</p>
                <form method='post' onSubmit={handleTextProcessSubmit}>
                  <div className='relative w-full mb-3 mt-8'>
                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='text'>
                      Text
                    </label>
                    <textarea
                      rows={4}
                      cols={80}
                      name='textContent'
                      className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='Enter the text to scan...'
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='email'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='Email'
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>

                  <div className='text-center mt-6'>
                    <button
                      className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                      type='submit'
                      style={{ transition: 'all .15s ease' }}
                    >
                      Process
                    </button>
                  </div>
                </form>

                <form method='post' onSubmit={handleQuery}>
                  <div className='relative w-full mb-3'>
                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='query'>
                      Query
                    </label>
                    <input
                      type='text'
                      name='question'
                      className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='Enter you query for the text entered above...'
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div className='text-center mt-6'>
                    <button
                      className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                      type='submit'
                      style={{ transition: 'all .15s ease' }}
                    >
                      Get Answer
                    </button>
                  </div>
                </form>

                <div className='relative w-full mb-3'>
                  <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='result'>
                    Result
                  </label>
                  <textarea
                    rows={8}
                    cols={80}
                    className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full'
                    placeholder='Query result will be displayed here.'
                    readOnly
                    value={response}
                  />
                </div>

                <div className='text-center mt-6 hidden'>
                  <button
                    className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                    type='submit'
                    style={{ transition: 'all .15s ease' }}
                    onClick={handleGetArticle}
                  >
                    Get data from prompt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryText;
