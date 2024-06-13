import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { headerData } from '../../../data/headerData';
import { socialsData } from '../../../data/socialsData';
import { Link } from '@tanstack/react-router';
import AuthorImage from "../../../assets/images/blog-author.jpg"
import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin, BiLogoLinkedinSquare } from "react-icons/bi";
const Landing = () => {

    return (
        <>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[110vh]"
            >
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                            <div
                                className="container relative z-30  pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48"
                            >
                                <div className="flex flex-col items-center justify-center lg:flex-row">
                                    <div className="rounded-full border-8 border-primary shadow-xl">
                                        <img
                                            src={AuthorImage}
                                            className="h-48 rounded-full sm:h-56"
                                            alt="author"
                                        />
                                    </div>
                                    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                                        <h1
                                            className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
                                        >
                                            Hello I'm Christy Smith!
                                        </h1>
                                        <div
                                            className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
                                        >
                                            <div
                                                className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
                                            >
                                                <p className="font-body text-lg uppercase text-white">Let's connect</p>
                                                <div className="hidden sm:block">
                                                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                                                </div>
                                            </div>
                                            <div
                                                className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                                            >
                                                <a href="/">
                                                    <BiLogoFacebookSquare className="text-2xl text-white hover:text-yellow-600" />
                                                </a>
                                                <a href="/" className="pl-4">
                                                <BiLogoTwitter className="text-2xl text-white hover:text-yellow-600" />
                                                   
                                                </a>
                                                <a href="/" className="pl-4">
                                              
                                                <BiLogoLinkedinSquare className="text-2xl text-white hover:text-yellow-600" />
                                                </a>
                                                <a href="/" className="pl-4">
                                                <BiLogoInstagram className="text-2xl text-white hover:text-yellow-600" />
                                                 
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px" }}
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
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Landing;
