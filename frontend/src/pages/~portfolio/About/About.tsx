import AboutImg from "../../../assets/images/about2.png";
import AnimatedCard from '../../../components/AnimatedCard/AnimatedCard';

const About = () => {

    return (
        <section className="relative py-20">
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
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="mx-auto px-4">
                <div className="line-styling">
                    <div className="style-circle"></div>
                    <div className="style-circle"></div>
                    <div className="style-line"></div>
                </div>
                <div className="items-center flex flex-wrap">
                    <div className="w-full hidden lg:block w-[445px] xl:w-[480px] ml-auto mr-auto px-4">
                        <div className="mt-20 flex flex-wrap gap-2 xl:gap-8">
                            {[1, 2, 3, 4].map((service, index) => (
                                <AnimatedCard key={`title${index}`} index={index} title={`service${service}`} icon={AboutImg} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                <i className="fas fa-rocket text-xl"></i>
                            </div>
                            <h3 className="text-3xl font-semibold">
                                WHO AM I?
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                My name's Jane. I'm a web designer and developer based in Southampton, UK.

                                During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                <i className="fas fa-fingerprint"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-600">
                                                Carefully crafted components
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                <i className="fab fa-html5"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-600">Amazing page examples</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                <i className="far fa-paper-plane"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-600">Dynamic components</h4>
                                        </div>
                                    </div>
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
