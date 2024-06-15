import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import BadgeCard from '../BadgeCard/BadgeCard';

export interface AnimatedCardProps {
    index: number;
    title?: string;
    icon?: any;

}

const AnimatedCard = ({ index, title, icon }: AnimatedCardProps) => {
    return (
        <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-7xl mx-auto relative z-0">

            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full p-[1px] rounded-[20px]">
                <BadgeCard
                    title="Fully Customizable"
                    details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                    icon={icon}
                />
                {/* <div
                    className="bg-black rounded-[20px] py-5 px-8 min-h-[250px] flex justify-evenly items-center flex-col shadow-2xl shadow-gray-500">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <p className="text-taupe text-[18px] w-[135px] font-bold text-center">
                        {title}
                    </p>
                </div> */}
            </motion.div>
        </motion.div>

    );
};

export default AnimatedCard;
