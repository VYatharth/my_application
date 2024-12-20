// Documentation - https://www.youtube.com/watch?v=RMTdoi_5sAA

import { useState } from "react";
import { motion } from "framer-motion";
import AchievementCard from "../../../../components/AchievementCard/AchievementCard";

import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { Achievement } from "../../../../models";



export interface AchievementSliderProps {
    achievements: Achievement[];
}

const AchievementSlider = (props: AchievementSliderProps) => {
    const {achievements} = props;
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };


    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.8, zIndex: 3 },
        left: { x: "-90%", scale: 0.6, zIndex: 2 },
        right: { x: "90%", scale: 0.6, zIndex: 1 },
        right1: { x: "50%", scale: 0.8, zIndex: 3 },
    };
    return (
        <div className="mt-32">
            <div className="flex items-center flex-col justify-center h-[200px]">
                {achievements.map((achievement, index) => (
                    <motion.div
                        initial="center"
                        transition={{ duration: 0.5 }}
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants}
                        key={index}
                        style={{ position: "absolute" }}>
                        <AchievementCard
                            title={achievement.title}
                            subtitle={achievement.subtitle ?? ''}
                            link={achievement.link}
                            imageSrc={`${achievement.imageSrc}`}
                        />
                    </motion.div>

                ))}
            </div>
            <div className="flex flex-row gap-3 mt-28">
                <button type="button"
                    className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-2 rounded-full bg-cyan-800"
                    onClick={handleBack}
                >
                    <BiSolidChevronLeft ></BiSolidChevronLeft>
                </button>

                <button type="button"
                    className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-2 rounded-full bg-cyan-800"
                    onClick={handleNext}
                >
                    <BiSolidChevronRight  ></BiSolidChevronRight >

                </button>
            </div>
        </div>
    );
};

export default AchievementSlider;