import DownloadResume from '../../../components/DownloadResume/DownloadResume';
import { portfolioData } from '../../../data/portfolioData';

const Footer = () => {
  return (
    <section className='relative block bg-gray-900'>
      <div
        className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
        style={{ height: '80px' }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon className='text-gray-900 fill-current' points='2560 0 2560 110 0 100'></polygon>
        </svg>
      </div>

      <div className='container mx-auto px-4 lg:pt-16 lg:pb-20'>
        <div className='flex flex-wrap text-center justify-center'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold text-gray-100'>Let's Connect!</h2>
            <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
              Feel free to mail me at - <span className='font-bold text-gray-400'>varshneya.yathartha@gmail.com</span>
            </p>
            
            <DownloadResume additionalClasses='mr-2'></DownloadResume>
            
          </div>
        </div>
        <div className='flex flex-row flex-wrap mt-4 justify-center'>
          <div className='mt-6'>
            {portfolioData?.publicProfiles?.map((profile, i) => {
              return (
                <button
                  className='bg-gray-200 text-black text-2xl shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none  mr-2 hover:bg-white hover:scale-125 transition duration-300 ease-in-out'
                  type='button'
                >
                  <a href={profile.link} target='_blank' rel='noopener noreferrer' className='flex justify-center'>
                    {profile.icon}
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
