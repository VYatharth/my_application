import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';

export interface BadgeCardProps {
    title?: string;
    details?: string;
    icon?: any;

}

const BadgeCard = ({ icon, title, details }: BadgeCardProps) => {
    return (
        <>
          <div className="w-[200px] xl:w-[215px]">
            <div className="rounded-[20px] bg-white p-4 xl:p-6 shadow-2 hover:shadow-lg dark:bg-dark-2">
              <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary/[.8]">
                {icon}
              </div>
              <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                {title}
              </h4>
              <p className="text-body-color text-sm dark:text-dark-6">{details}</p>
            </div>
          </div>

          {/* <div
                    className="bg-black rounded-[20px] py-5 px-8 min-h-[250px] flex justify-evenly items-center flex-col shadow-2xl shadow-gray-500">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <p className="text-taupe text-[18px] w-[135px] font-bold text-center">
                        {title}
                    </p>
                </div>  */}
        </>
      );
};

export default BadgeCard;
