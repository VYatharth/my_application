import AboutImg from "../../../assets/images/about2.png";
import AnimatedCard from '../../../components/AnimatedCard/AnimatedCard';
import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin, BiLogoLinkedinSquare, BiSolidChip  } from "react-icons/bi";
import BulletEllipse from "../../../components/BulletEllipse/BulletEllipse";
import { LayoutGroup } from "framer-motion";
import ExpandableTag from "../../../components/ExpandableTag/ExpandableTag";
import { FaTools } from "react-icons/fa";
const Skills = () => {

    return (


        <section className="pb-60 relative block bg-gray-900">
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
                        className="text-gray-900 fill-current"
                        points="2560 100 0 100 0 0"
                    ></polygon>
                </svg>

            </div>

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-28">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12">
                        <h2 className="text-4xl font-semibold text-white">
                            My Skills
                        </h2>
                    </div>
                </div>
            </div>



            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <div
                            className="max-w-full rounded-lg flex flex-wrap items-center justify-center gap-4">
                            <LayoutGroup>
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                                <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                                <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                                <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            </LayoutGroup>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-gray-900 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg shadow-gray-900 rounded-full bg-gray-100">
                                <BiSolidChip className="text-2xl"></BiSolidChip>
                            </div>
                            <h3 className="text-3xl font-semibold text-white">
                                Technologies I have worked with
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-500">
                                In the left are the Technologies I have worked with in my whole career. Below are the ones that define my current dominant skill set:
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <BulletEllipse text="Python" textClasses="text-gray-500" bulletClasses="bg-white/[.5]" />
                                </li>
                                <li className="py-2">
                                    <BulletEllipse text="GCP (GKE, Cloud SQL, PubSub, Load Balancer, Cloud storage)" textClasses="text-gray-500" bulletClasses="bg-white/[.5]" />
                                </li>
                                <li className="py-2">
                                    <BulletEllipse text="ReactJs" textClasses="text-gray-500" bulletClasses="bg-white/[.5]" />
                                </li>
                                {/* <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                <i className="far fa-paper-plane"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-600">Dynamic components</h4>
                                        </div>
                                    </div> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                    <div className="text-gray-900 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                        <FaTools className="text-xl"></FaTools>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                        Tool I have used
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-500">
                        In the left are the Technologies I have worked with in my whole career. Below are the ones that define my current dominant skill set:
                    </p>

                    <p className="text-lg leading-relaxed mt-0 mb-4 text-gray-500">
                        The kit comes with three pre-built pages to help you get
                        started faster. You can change the text and images and
                        you're good to go. Just make sure you enable them first via
                        JavaScript.
                    </p>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                    <div
                        className="max-w-full rounded-lg shadow-lg flex flex-wrap items-center justify-center gap-4">
                        <LayoutGroup>
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                            <ExpandableTag hoveredText="3,203" unhoveredText="3K" />
                            <ExpandableTag hoveredText="4,548,923" unhoveredText="4.5M" />
                            <ExpandableTag hoveredText="🦋🦋" unhoveredText="Butterflies" />
                        </LayoutGroup>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
