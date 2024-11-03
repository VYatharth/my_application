import { BiChevronRight } from 'react-icons/bi';
import AuthorImage from '../../../assets/images/yat2.jpg';
import BackgroundImage from '../../../assets/images/bg-hero.jpg';
import DownloadResume from '../../../components/DownloadResume/DownloadResume';
import { portfolioData } from '../../../data/portfolioData';


const Landing = () => {
  return (
    <>
      <div className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-[110vh] border-b border-gray-100'>
        <div
          className='absolute top-0 w-full h-full bg-center bg-cover'
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}
        >
          <span id='blackOverlay' className='w-full h-full absolute opacity-75 bg-black'></span>
        </div>
        <div className='container relative mx-auto'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full lg:w-10/12 px-4 ml-auto mr-auto text-center'>
              <div className='container relative z-30  pb-12 sm:pt-44 sm:pb-48 lg:pt-54 lg:pb-48'>
                <div className='flex flex-col items-center justify-center lg:flex-row'>
                  <div className='rounded-full border-8 border-gray-300 shadow-xl'>
                    <img src={AuthorImage} className='h-48 rounded-full sm:h-56' alt='author' />
                  </div>
                  <div className='pt-8 sm:pt-10 lg:pl-8 lg:pt-0'>
                    <h1 className='text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl'>
                      Hello I'm Yathartha Varshneya!
                    </h1>
                    <div className='flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start'>
                      <div className='flex items-center justify-center pl-0 sm:justify-start md:pl-1'>
                        <p className='font-body text-lg uppercase text-white'>Let's connect</p>
                        <div className='hidden sm:block'>
                          <BiChevronRight className='text-3xl text-yellow-600'></BiChevronRight>
                        </div>
                      </div>
                      <div className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
                        {portfolioData?.publicProfiles?.map((profile, i) => {
                          return (
                            <a
                              href={profile.link}
                              className={`${i ? 'ml-4' : ''} text-2xl text-white hover:text-gray-400`}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              {profile.icon}
                            </a>
                          );
                        })}
                        <DownloadResume additionalClasses='ml-4'></DownloadResume>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
