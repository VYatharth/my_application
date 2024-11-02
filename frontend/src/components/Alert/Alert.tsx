import { useEffect } from 'react';
import { AlertData, AlertType } from '../../models';
import { cloneDeep } from 'lodash';
import { FaBell } from 'react-icons/fa';
export interface AlertProps {
  alertData: AlertData;
  setAlertData: (data: AlertData) => void;
}

const bgColorMap = {
  [AlertType.error]: 'bg-red-600',
  [AlertType.warning]: 'bg-orange-500',
  [AlertType.success]: 'bg-green-600',
  [AlertType.info]: 'bg-blue-500',
};

const Alert = ({ setAlertData, alertData }: AlertProps) => {
  const bgColor = bgColorMap[alertData.type ?? AlertType.info];

  useEffect(() => {
    if (alertData.alertText) {
      setTimeout(() => {
        setAlertText('');
      }, 5000);
    }
  }, [alertData.alertText]);

  const setAlertText = (text: string) => {
    const newData = cloneDeep(alertData);
    newData.alertText = text;
    setAlertData(newData);
  };

  return (
    <>
      {alertData.alertText.length > 0 ? (
        <div className='absolute px-4 pt-2 top-0 left-0 z-10 w-full'>
          <div className={'text-white px-6 py-4 border-0 rounded relative mb-4 ' + bgColor}>
            <span className='text-xl inline-block mr-5 align-middle'>
              <FaBell />
            </span>
            <span className='inline-block align-middle mr-8'>{alertData.alertText}</span>
            <button
              className='absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none'
              onClick={() => setAlertText('')}
            >
              <span>×</span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
