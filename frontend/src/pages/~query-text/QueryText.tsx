import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { IoIosWarning } from 'react-icons/io';
import ClipLoader from 'react-spinners/ClipLoader';
import Alert from '../../components/Alert/Alert';
import { AlertData, AlertType, QueryTextRequest } from '../../models';
import { isValidEmail } from '../../utils/commonUtil';
import { QueryTextService } from './queryText.service';

const QueryText = () => {
  const queryClient = useQueryClient();
  const [queryResult, setQueryResult] = useState('');
  const [alertData, setAlertData] = useState<AlertData>({ alertText: '' });
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState({ preprocess: false, query: false });

  const updateAlertData = (text: string, type: AlertType) => {
    setAlertData({ alertText: text, type });
  };

  const preProcessMutation = useMutation({
    mutationFn: async (data: QueryTextRequest) => {
      setLoading({ ...loading, preprocess: true });
      setQueryResult('');
      const preprocessResponse = await QueryTextService.preProcessText(data);
      return preprocessResponse;
    },
    onSuccess: (responseData: string) => {
      updateAlertData('Text processed successfully. You can now query the entered text.', AlertType.success);
      setEmail(responseData);
      setLoading({ ...loading, preprocess: false });
    },
    onError: (err: any) => {
      const errDetail = (err.body as any)?.detail;
      updateAlertData('Something went wrong.', AlertType.error);
      console.error(`${errDetail}`);
      setLoading({ ...loading, preprocess: false });
    },
  });

  const handleQuery = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    setLoading({ ...loading, query: true });
    setQueryResult('');

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const requestData = {
      query: formData.get('question')?.toString() ?? '',
      email: email,
    };

    const response = await queryClient.fetchQuery({
      queryKey: ['question'],
      queryFn: async () => {
        return await QueryTextService.getQueryResponse(requestData);
      },
      staleTime: 0,
    });

    setQueryResult(response);
    setLoading({ ...loading, query: false });
  };

  const handleTextProcessSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const requestData = {
      text_content: formData.get('textContent')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
    };
    if (!requestData.text_content?.length) {
      updateAlertData('Please enter text content to query from', AlertType.error);
      return;
    }

    if (!isValidEmail(requestData.email)) {
      updateAlertData('Invalid Email address', AlertType.error);
      return;
    }

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

    setQueryResult(response);
  };

  return (
    <>
      <section className='relative block bg-gray-900'>
        <Alert alertData={alertData} setAlertData={setAlertData} />
        <div className='mx-auto px-4 pt-8 pb-24'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300'>
                <div className='flex-auto p-5 lg:p-10'>
                  <h4 className='text-2xl font-semibold'>Utility to quickly scan a text and get your answers</h4>
                  <div className='flex content-center items-center'>
                    <IoIosWarning className='text-red-500 text-xl'></IoIosWarning>
                    <p className='leading-9 self-center ml-1 text-gray-600'>
                      For demo and testing purpose only.
                    </p>
                  </div>

                  <form method='post' onSubmit={handleTextProcessSubmit}>
                    <div className='relative w-full mb-3 mt-8'>
                      <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='text'>
                        Text
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        required
                        name='textContent'
                        className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                        placeholder='Enter the text to scan and query from...'
                      />
                    </div>
                    <div className='relative w-full mb-3'>
                      <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        required
                        name='email'
                        className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                        placeholder='Email'
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className='flex text-center justify-center mt-6'>
                      <button
                        className='flex items-center bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                        type='submit'
                        style={{ transition: 'all .15s ease' }}
                      >
                        <ClipLoader
                          color={'#ffffff'}
                          loading={loading.preprocess}
                          size={20}
                          className='mr-4'
                          aria-label='Loading Spinner'
                          data-testid='loader'
                        />
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
                        required
                        disabled={!email}
                        className={`border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ${!email ? 'cursor-not-allowed opacity-40' : ''}`}
                        placeholder='Enter your query for the text entered above...'
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className='flex text-center justify-center mt-6'>
                      <button
                        className={`flex items-center bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ${!email ? 'cursor-not-allowed opacity-40' : ''}`}
                        type='submit'
                        disabled={!email}
                        style={{ transition: 'all .15s ease' }}
                      >
                        <ClipLoader
                          color={'#ffffff'}
                          loading={loading.query}
                          size={20}
                          className='mr-4'
                          aria-label='Loading Spinner'
                          data-testid='loader'
                        />
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
                      className={`border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full ${!email ? 'cursor-not-allowed opacity-40' : ''}`}
                      placeholder='Query result will be displayed here.'
                      readOnly
                      value={queryResult}
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
    </>
  );
};

export default QueryText;
