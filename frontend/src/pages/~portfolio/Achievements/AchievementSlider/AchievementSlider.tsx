import { useState } from "react";
import { motion } from "framer-motion";
import AchievementCard from "../../../../components/AchievementCard/AchievementCard";
import awsBadge from "../../../../assets/images/aws-badge.png";
import gcpBadge from "../../../../assets/images/gcp-badge2.png";

const AchievementSlider = () => {
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

    const images = [
        "https://i.ibb.co/30tGtjP/image-04.jpg",
        awsBadge,
        gcpBadge,
        "https://i.ibb.co/yVVT0Dp/image-02-2.jpg",
        "https://i.ibb.co/8P6cvVy/image-01-1.jpg",

    ];

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
                {images.map((image, index) => (
                    <motion.div
                        initial="center"
                        transition={{ duration: 0.5 }}
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants}
                        key={index}
                        style={{ position: "absolute" }}>
                        <AchievementCard
                            name="Coriss Ambady"
                            profession="Web Developer"
                            imageSrc={`${image}`}
                        />
                    </motion.div>

                ))}
            </div>
            <div className="flex flex-row gap-3 mt-28">
                <button type="button"
                    className="text-white bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button type="button"
                    className="text-white bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AchievementSlider;