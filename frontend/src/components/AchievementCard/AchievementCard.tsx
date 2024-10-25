import { Achievement } from '../../models';
import { Link, useNavigate } from '@tanstack/react-router';

const AchievementCard = ({ imageSrc, title, subtitle, link }: Achievement) => {
  return (
    <>
      <div className='w-full px-4'>
        <div className='mx-auto '>
          <div className='relative overflow-hidden rounded-lg bg-gradient-to-b from-cyan-800 to-cyan-600 shadow-2 w-[300px] h-[366px] p-4'>
            <img src={imageSrc} alt='' className='w-full' />
            <div className='absolute bottom-5 left-0 w-full text-center'>
              <div className='relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2'>
                <h3 className='text-base font-semibold text-dark dark:text-white'>
                  {link ? <Link to={link}>{title}</Link> : title}
                </h3>
                <p className='text-xs text-body-color dark:text-dark-6'>
                  {link ? <Link to={link}>{subtitle}</Link> : subtitle}
                </p>
                <div>
                  <span className='absolute bottom-0 left-0'>
                    <svg width={61} height={30} viewBox='0 0 61 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <circle cx={16} cy={45} r={45} fill='#13C296' fillOpacity='0.11' />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementCard;
