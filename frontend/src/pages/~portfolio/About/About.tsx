import AnimatedCard from '../../../components/AnimatedCard/AnimatedCard';
import BulletEllipse from '../../../components/BulletEllipse/BulletEllipse';
import { portfolioData } from '../../../data/portfolioData';

const About = () => {
  return (
    <section className='relative py-20 bg-gray-100 pb-44 border-b border-gray-900'>
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
          <polygon className='text-gray-100 fill-current' points='2560 0 2560 110 0 100'></polygon>
        </svg>
      </div>

      <div className='mx-auto px-4 mt-10'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full hidden lg:block w-[450px] xl:w-[480px] ml-auto mr-auto px-2'>
            <div className='flex flex-wrap gap-6'>
              {portfolioData.primarySkills.map((skill, index) => (
                <AnimatedCard
                  key={`title${index}`}
                  index={index}
                  title={skill.skill}
                  description={skill.description}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          <div className='w-full lg:w-6/12 ml-auto mr-auto'>
            <div className='flex items-center justify-between mb-8 px-2 lg:px-0'>
              <div className='style-circle rounded-lg bg-primary w-2.5 h-2.5'></div>
              <div className='style-circle rounded-lg bg-primary w-2.5 h-2.5'></div>
              <div className='style-line rounded-lg bg-primary h-[5px] w-[90%]'></div>
            </div>
            <div className='md:pr-12 px-4'>
              <h3 className='text-3xl font-semibold'>WHO AM I?</h3>
              <p className='mt-4 text-lg leading-relaxed text-gray-600'>{portfolioData.description}</p>
              <p className='mt-4 text-lg leading-relaxed text-gray-600'>Apart from coding, some other activities that I love to do!</p>
              <ul className='list-none mt-6'>
                <li className='py-2'>
                  <BulletEllipse text='Reading' textClasses='text-gray-600' />
                </li>
                <li className='py-2'>
                  <BulletEllipse text='Writing Tech Blogs' textClasses='text-gray-600' />
                </li>
                <li className='py-2'>
                  <BulletEllipse text='Playing Games' textClasses='text-gray-600' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
