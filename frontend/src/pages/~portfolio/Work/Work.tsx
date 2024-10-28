import WorkCard from "../../../components/WorkCard/WorkCard";
import GitHubCalendar from 'react-github-calendar';
import ChatBot from "../../../assets/images/cb.jpg";
import ProblemSolving from "../../../assets/images/ps.jpg";
import Blog from "../../../assets/images/b4.png";

// github calendar documentation - https://grubersjoe.github.io/react-github-calendar/
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
        <section className="py-20 bg-slate-400 -mt-4 border-b border-gray-900">

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
                            buttonText="View Leetcode Profile"
                            buttonHref="https://leetcode.com/u/yatharthavarshneya/"
                        >
                            <img src={ProblemSolving} alt="portfolio" className="w-full" />
                        </WorkCard>

                        <WorkCard
                            title="Codes"
                            subTitle="Github Activity"
                            buttonText="View Github Profile"
                            buttonHref="https://github.com/VYatharth"
                        >
                            <div className="flex flex-wrap justify-center rounded-[10px] p-4 w-full h-[300px]">

                                <GitHubCalendar
                                    username="VYatharth"
                                    transformData={selectLastHalfYear}
                                    hideColorLegend
                                    labels={{
                                        totalCount: '{{count}} contributions in the last 4 months',
                                    }}
                                />
                            </div>
                        </WorkCard>

                        <WorkCard
                            title="Writes"
                            subTitle="Blogging"
                            buttonText="View Blogs"
                            buttonHref="https://medium.com/@varshneya.yathartha"
                        >
                            <img src={Blog} alt="portfolio" className="w-full" />
                        </WorkCard>
                        
                        <WorkCard
                            title="Explores"
                            subTitle="AI & ML"
                            buttonText="Query App"
                            buttonHref="/query-text"
                        >
                            <img src={ChatBot} alt="portfolio" className="w-full" />
                        </WorkCard>
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Work;
