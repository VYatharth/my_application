import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { headerData } from '../../../data/headerData';
import { socialsData } from '../../../data/socialsData';
import { Link } from '@tanstack/react-router';

const Landing = () => {

    return (
        <div className="landing h-screen flex items-center justify-center">
            <div className="landing--container flex items-center justify-center h-full relative">
                <div
                    className="landing--container-left flex-35 h-full flex items-end justify-start"
                    style={{ backgroundColor: "ui.main" }}
                >
                    <div className="lcl--content m-12 w-full flex items-center justify-start">
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social text-2xl m-4 transition-transform duration-500 hover:scale-125'
                                    style={{ color: "ui.secondary" }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social text-2xl m-4 transition-transform duration-500 hover:scale-125'
                                    style={{ color: "ui.secondary" }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img absolute left-1/2 transform -translate-x-1/2 w-80 h-80 object-cover rounded-full shadow-lg transition-opacity duration-300'
                    style={
                        {
                            borderColor: "ui.secondary",
                        }
                    }
                />
                <div
                    className='landing--container-right flex-65 h-full bg-gray-200 flex flex-col items-end justify-center'
                    style={{ backgroundColor: "ui.secondary" }}
                >
                    <div
                        className='lcr--content w-1/2 mr-28 font-sans'
                        style={{ color: "ui.dim" }}
                    >
                        <h6 className='text-lg font-medium mb-4 opacity-80'>{headerData.title}</h6>
                        <h1 className='text-4xl font-semibold my-4'>{headerData.name}</h1>
                        <p className='mt-4 text-lg font-medium opacity-70'>{headerData.desciption}</p>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
