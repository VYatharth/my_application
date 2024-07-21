import { BiLogoLinkedinSquare } from "react-icons/bi";
import AnimatedCard from '../../../components/AnimatedCard/AnimatedCard';
import BulletEllipse from "../../../components/BulletEllipse/BulletEllipse";

const About = () => {

    return (
        <section className="relative py-20 bg-gray-100 pb-44">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-100 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="mx-auto px-4 mt-10">

                <div className="items-center flex flex-wrap">
                    <div className="w-full hidden lg:block w-[450px] xl:w-[480px] ml-auto mr-auto px-2">
                        <div className="flex flex-wrap gap-6">
                            {[1, 2, 3, 4].map((service, index) => (
                                <AnimatedCard key={`title${index}`} index={index} title={`service${service}`} icon={<BiLogoLinkedinSquare className="text-2xl text-white hover:text-yellow-600" />} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 ml-auto mr-auto">
                        <div className="flex items-center justify-between mb-8 px-2 lg:px-0">
                            <div className="style-circle rounded-lg bg-primary w-2.5 h-2.5"></div>
                            <div className="style-circle rounded-lg bg-primary w-2.5 h-2.5"></div>
                            <div className="style-line rounded-lg bg-primary h-[5px] w-[90%]"></div>
                        </div>
                        <div className="md:pr-12 px-4">

                            <h3 className="text-3xl font-semibold">
                                WHO AM I?
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                My name's Jane. I'm a web designer and developer based in Southampton, UK.

                                During the day I work as a dfdfadjf klj ljalkd jdakda jkdla fjkdlfaj adk fjlakdfjkdjfkldjfkadjfkldjfkadjfkdjafkdjfalda kdjf kadj kd kladjf ldkjf adjf ldakjf ladfj a dfdfadjf klj ljalkd jdakda jkdla fjkdlfaj adk fjlakdfjkdjfkldjfkadjfkldjfkadjfkdjafkdjfalda kdjf kadj kd kladjf ldkjf adjf ldakjf ladfj a dfdfadjf klj ljalkd jdakda jkdla fjkdlfaj adk fjlakdfjkdjfkldjfkadjfkldjfkadjfkdjafkdjfalda kdjf kadj kd kladjf ldkjf adjf ldakjf ladfj lead developer at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <BulletEllipse text="Carefully crafted components" textClasses="text-gray-600" />
                                </li>
                                <li className="py-2">
                                    <BulletEllipse text="Amazing page examples" textClasses="text-gray-600" />
                                </li>
                                <li className="py-2">
                                    <BulletEllipse text="Dynamic components" textClasses="text-gray-600" />
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
