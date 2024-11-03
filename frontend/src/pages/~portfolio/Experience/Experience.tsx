import { BiSolidBookOpen } from 'react-icons/bi';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { portfolioData } from '../../../data/portfolioData';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experience = () => {
  return (
    <section className='py-20 bg-slate-600 -mt-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap flex-col content-center justify-center text-center mb-12 mt-8'>
          <div className='flex-col w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold text-white'>EXPERIENCE</h2>
            <span className='w-24 border-b-[1px] border-gray-200 px-8'>
              <span className='w-24 border-b-[3px] border-blue-600 px-4'>&nbsp;</span>
            </span>
          </div>
        </div>

        <div className='flex flex-wrap items-center mt-8'>
          <VerticalTimeline className='vertical-timeline-custom-line'>
            {portfolioData.experience.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}

            <VerticalTimelineElement iconClassName='bg-black text-gray-200' icon={<BiSolidBookOpen />} />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
