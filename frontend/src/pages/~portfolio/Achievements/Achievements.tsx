import { take } from 'lodash';
import aws from '../../../assets/images/aws-logo.png';
import gcp from '../../../assets/images/gcp4.png';
import { portfolioData } from '../../../data/portfolioData';
import AchievementSlider from './AchievementSlider/AchievementSlider';

const Achievements = () => {
  return (
    <section className='pb-60 bg-gray-300 -mt-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-2 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-2 rounded-full bg-gradient-to-b from-cyan-600 to-cyan-800'>
                  <img src={gcp} alt='' className='w-full' />
                </div>
                <h6 className='text-xl font-semibold'>Google Certified Associate Cloud Engineer</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  An Associate Cloud Engineer deploys and secures applications and infrastructure, monitors operations
                  of multiple projects, and maintains enterprise solutions to ensure that they meet target performance
                  metrics.
                </p>
              </div>
            </div>
          </div>

          <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-0 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-2 rounded-full bg-gradient-to-b from-cyan-600 to-cyan-800'>
                  <img src={aws} alt='' className='w-full color-white' />
                </div>
                <h6 className='text-xl font-semibold'>AWS Certified Solutions Architect – Associate</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Earners of this certification have a comprehensive understanding of AWS services and technologies.
                  Badge owners are able to strategically design well-architected distributed systems that are scalable,
                  resilient, efficient, and fault-tolerant.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-center text-center mb-4 mt-8'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold text-cyan-800'>My Achievements</h2>
            <p className='text-lg leading-relaxed m-4 text-gray-600'>
              These are some of the certifications and appreciations I received throughout my career
            </p>
          </div>
        </div>

        <div className='flex flex-wrap justify-center text-center items-center px-0'>
          <AchievementSlider achievements={take(portfolioData.achievements, 5)}></AchievementSlider>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
