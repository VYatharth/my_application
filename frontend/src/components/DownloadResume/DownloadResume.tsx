import { MdDownloadForOffline } from 'react-icons/md';
import Resume from '../../assets/files/resume.pdf';
import { ColorMode } from '../../models';

const DownloadResume = (props: { additionalClasses?: string; mode?: ColorMode }) => {
  const { mode, additionalClasses } = props;
  return (
    <button className={additionalClasses}>
      <a
        className={`flex items-center justify-center text-xs font-bold uppercase px-3 py-2 rounded outline-none
           ${mode === ColorMode.dark ? 'text-white bg-gray-800 hover:shadow-md hover:bg-gray-400 hover:text-gray-900' : 'bg-white text-gray-800 hover:bg-gray-600 hover:text-white'}`}
        href={Resume}
        download='Yathartha_Varshneya.pdf'
      >
        <MdDownloadForOffline className='text-lg mr-2'></MdDownloadForOffline> Download Resume
      </a>
    </button>
  );
};

export default DownloadResume;
