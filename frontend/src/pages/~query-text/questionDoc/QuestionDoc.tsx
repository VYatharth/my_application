import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import PrimarySemiRoundedButton from '../../../components/Buttons/PrimarySemiRoundedButton';
import { QuestionService } from './question.service';
import { UploadFilesRequest } from '../../../models';

const QuestionDoc = () => {
  const queryClient = useQueryClient();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [response, setResponse] = useState('');
  const handleFileChange = (e: any) => {
    setSelectedFiles([...((e?.target?.files as never) ?? [])]);
  };

  const mutation = useMutation({
    mutationFn: async (data: UploadFilesRequest) => {
      const response = await QuestionService.Uploadfiles(data);
      return response;
    },
    onSuccess: (responseData: string) => {
      console.log(responseData);
      alert('File uploaded successfully');
    },
    onError: (err: any) => {
      const errDetail = (err.body as any)?.detail;
      alert('Something went wrong.');
      console.error(`${errDetail}`);
    },
  });
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const requestData = { question: formData.get('question')?.toString() ?? '' };

    const response = await queryClient.fetchQuery({
      queryKey: ['question'],
      queryFn: async () => {
        return await QuestionService.getQuestionResponse(requestData);
      },
      staleTime: 0,
    });

    setResponse(response);
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert('Please select files first');
      return;
    }
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });
    // Replace this URL with your server-side endpoint for handling file uploads
    // const response = await fetch('https://your-upload-endpoint.com/upload', {
    //   method: 'POST',
    //   body: formData,
    // });
    mutation.mutate({ formData: { upload_files: selectedFiles } });
  };

  const handleGetArticle = async () => {
    const response = await queryClient.fetchQuery({
      queryKey: ['question'],
      queryFn: async () => {
        const data = await QuestionService.getArticle();
        return data;
      },
      staleTime: 0,
    });

    setResponse(response);
  };

  return (
    <div>
      <h2>Multiple File Upload</h2>
      <input type='file' multiple onChange={handleFileChange} />
      <PrimarySemiRoundedButton label='Upload' action={handleUpload}></PrimarySemiRoundedButton>
      <hr></hr>
      <hr></hr>
      <br />
      <br />
      <div>
        <form method='post' onSubmit={handleSubmit}>
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
      <PrimarySemiRoundedButton label='Model' action={handleGetArticle}></PrimarySemiRoundedButton>
    </div>
  );
};

export default QuestionDoc;
