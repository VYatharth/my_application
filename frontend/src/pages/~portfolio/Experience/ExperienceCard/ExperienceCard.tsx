import {
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    BiSolidBriefcase
  } from 'react-icons/bi';

export interface ExperienceCardProps {
    experience: any;
}
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const Icon = experience.icon ?? BiSolidBriefcase;
    return (
        <VerticalTimelineElement
            className={experience.className ?? 'vertical-timeline-element--work'}
            contentStyle={experience.contentStyle}
            contentArrowStyle={experience.contentArrowStyle}
            date={experience.date}
            dateClassName={'text-dim text-gray-700 min-[1170px]:text-gray-300 text-lg font-bold'}
            iconClassName={experience.iconClassName ?? 'bg-gradient-to-b from-blue-800 to-sky-500 text-white'}
            textClassName={experience.textClassName ?? 'text-gray-800 shadow-lg bg-gray-100 border-b-[3px] border-gray-400'}
            icon={<Icon />}
        >
            <h3 className="vertical-timeline-element-title text-[28px] font-semibold leading-7">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">{experience.company_name}</h4>
            <p ><span className={`font-normal ${experience.descriptionClassName ?? 'text-gray-500'}`}>{experience.description}</span></p>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
