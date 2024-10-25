export interface WorkCardProps {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonHref?: string;
  children?: any;
}

const WorkCard = ({ title, subTitle, buttonText, buttonHref, children }: WorkCardProps) => {
  return (
    <>
      <div className='w-full px-12 md:w-1/2 xl:w-1/3 block'>
        <div className='relative mb-12'>
          <div className='overflow-hidden rounded-[10px] bg-gradient-to-b from-slate-400 to-slate-600 w-full h-[300px]'>
            {children}
          </div>
          <div className='relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark'>
            <h3 className='text-dark dark:text-white mb-2 text-xl font-bold'>{title}</h3>
            <span className='text-gray-600 mb-5 block text-sm font-medium'>{subTitle}</span>
            <a
              href={buttonHref}
              className='text-body-color dark:text-dark-6 hover:border-slate-600 bg-slate-200 hover:bg-slate-600 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white'
              target='_blank'
              rel='noopener noreferrer'
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
