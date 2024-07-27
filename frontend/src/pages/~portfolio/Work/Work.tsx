import 'react-vertical-timeline-component/style.min.css';
import WorkCard from "../../../components/WorkCard/WorkCard";
import GitHubCalendar from 'react-github-calendar';
import ChatBot from "../../../assets/images/cb.jpg";
import ProblemSolving from "../../../assets/images/ps.jpg";
import Blog from "../../../assets/images/b4.png";

const Work = () => {
    const selectLastHalfYear = (contributions: any) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 4;

        return contributions.filter((activity: any) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    return (
        <section className="py-20 bg-slate-400 -mt-4">

            <div className="container mx-auto px-4">

                <div className="flex flex-wrap flex-col content-center justify-center text-center mb-20 mt-8">
                    <div className="flex-col w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold text-white">
                            WHAT I DO!
                        </h2>
                        <span className="w-24 border-b-[1px] border-gray-200 px-8">
                            <span className="w-24 border-b-[3px] border-blue-600 px-4">&nbsp;</span>
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap items-center mt-8">
                    <div className="flex flex-wrap mx-8">
                        <WorkCard
                            title="Problem Solving"
                            subTitle="DSA"
                            buttonText="Leetcode Profile"
                            buttonHref="#"
                        >
                            <img src={ProblemSolving} alt="portfolio" className="w-full" />
                        </WorkCard>

                        <WorkCard
                            title="Codes"
                            subTitle="Github Activity"
                            buttonText="Github Profile"
                            buttonHref="#"
                        >
                            <div className="flex flex-wrap justify-center rounded-[10px] p-4 w-full h-[300px]">

                                <GitHubCalendar
                                    username="grubersjoe"
                                    transformData={selectLastHalfYear}
                                    hideColorLegend
                                    labels={{
                                        totalCount: '{{count}} contributions in the last half year',
                                    }}
                                />
                            </div>
                        </WorkCard>

                        <WorkCard
                            title="Chatbot"
                            subTitle="AI & ML"
                            buttonText="View Details"
                            buttonHref="#"
                        >
                            <img src={ChatBot} alt="portfolio" className="w-full" />
                        </WorkCard>
                        <WorkCard
                            title="Writes"
                            subTitle="Blogging"
                            buttonText="View Blogs"
                            buttonHref="/blogs"
                        >
                            <img src={Blog} alt="portfolio" className="w-full" />
                        </WorkCard>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Work;
