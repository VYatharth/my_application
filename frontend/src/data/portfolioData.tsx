import { BiLogo99Designs, BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare, BiLogoMedium, BiLogoPython, BiLogoReact, BiSolidCloud } from 'react-icons/bi';
import PythonLogo from '../assets/images/python.png';
import FastapiLogo from '../assets/images/fastapi.png';
import AngularLogo from '../assets/images/angular.png';
import AwsLogo from '../assets/images/aws-logo.png';
import ReactLogo from '../assets/images/react.png';
import JsLogo from '../assets/images/javascript.png';
import HtmlLogo from '../assets/images/html-logo.png';
import NcLogo from '../assets/images/net-core.png';
import DockerLogo from '../assets/images/docker-logo.png';
import KubernetesLogo from '../assets/images/kubernetes.png';
import GcpLogo from '../assets/images/gcp4.png';
import KafkaLogo from '../assets/images/kafka.png';
import MysqlLogo from '../assets/images/mysql.png';
import EsLogo from '../assets/images/es.png';
import KongLogo from '../assets/images/kong.png';
import OktaLogo from '../assets/images/okta.png';
import VscodeLogo from '../assets/images/vscode.png';
import TbplusLogo from '../assets/images/tableplus.png';
import GithubLogo from '../assets/images/github.png';
import PostmanLogo from '../assets/images/postman.png';
import SonarqubeLogo from '../assets/images/sq.png';
import JenkinsLogo from '../assets/images/jenkins.png';
import JestLogo from '../assets/images/jest.png';
import PrometheusLogo from '../assets/images/prometheus.png';
import JiraLogo from '../assets/images/jira.png';
import PoetryLogo from '../assets/images/poetry.png';
import awsBadge from '../assets/images/aws-badge.png';
import gcpBadge from '../assets/images/gcp-certification.png';
import nagarro from '../assets/images/nagarro.png';
import db2 from '../assets/images/db2.png';
import linux from '../assets/images/linux.png';

export const portfolioData = {
  description: `My name is Yathartha. I'm a full stack web developer based in India. During the day I work as a lead developer at a local agency and in the evening I utilize the time to built my own products. I spent my leisure hours writing articles. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.`,
  publicProfiles: [
    {
      link: 'https://www.linkedin.com/in/yathartha-varshneya-140192/',
      icon: <BiLogoLinkedinSquare />,
    },
    {
      link: 'https://medium.com/@varshneya.yathartha',
      icon: <BiLogoMedium />,
    },
    {
      link: 'https://github.com/VYatharth',
      icon: <BiLogoGithub />,
    },
    {
      link: 'mailto:varshneya.yathartha@gmail.com',
      icon: <BiLogoGmail />,
    },
   
  ],
  primarySkills: [
    {
      skill: 'Large Scale Distributed System Design',
      description:
        'We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.',
      icon: <BiLogo99Designs className='text-2xl text-white' />,
    },
    {
      skill: 'Python Developer',
      description: '',
      icon: <BiLogoPython className='text-2xl text-white' />,
    },
    {
      skill: 'Cloud Engineer (GCP and AWS)',
      description: '',
      icon: <BiSolidCloud className='text-2xl text-white' />,
    },
    {
      skill: 'React Developer',
      description: '',
      icon: <BiLogoReact className='text-2xl text-white' />,
    },
  ],
  technologiesUsed: [
    { name: 'Python', experience: '', icon: <img src={PythonLogo} className='h-16 rounded-full' alt='Python' /> },
    { name: 'FastAPI', experience: '', icon: <img src={FastapiLogo} className='h-10 rounded-full' alt='Python' /> },
    { name: 'React', experience: '', icon: <img src={ReactLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Javascript', experience: '', icon: <img src={JsLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'HTML', experience: '', icon: <img src={HtmlLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Angular', experience: '', icon: <img src={AngularLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: '.NET Core', experience: '', icon: <img src={NcLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Docker', experience: '', icon: <img src={DockerLogo} className='h-8 rounded-full' alt='Python' /> },
    {
      name: 'Kubernetes',
      experience: '',
      icon: <img src={KubernetesLogo} className='h-12 rounded-full' alt='Python' />,
    },
    { name: 'AWS', experience: '', icon: <img src={AwsLogo} className='h-12 rounded-full' alt='Python' /> },
    { name: 'GCP', experience: '', icon: <img src={GcpLogo} className='h-12 rounded-full' alt='Python' /> },
    { name: 'Kafka', experience: '', icon: <img src={KafkaLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'MySQL', experience: '', icon: <img src={MysqlLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'ElasticSearch', experience: '', icon: <img src={EsLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Kong', experience: '', icon: <img src={KongLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Okta', experience: '', icon: <img src={OktaLogo} className='h-8 rounded-full' alt='Python' /> },
  ],
  toolsUsed: [
    { name: 'VSCode', experience: '', icon: <img src={VscodeLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'TablePlus', experience: '', icon: <img src={TbplusLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Github', experience: '', icon: <img src={GithubLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Postman', experience: '', icon: <img src={PostmanLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'SonarQube', experience: '', icon: <img src={SonarqubeLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Jenkins', experience: '', icon: <img src={JenkinsLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Jest', experience: '', icon: <img src={JestLogo} className='h-8 rounded-full' alt='Python' /> },
    {
      name: 'Prometheus',
      experience: '',
      icon: <img src={PrometheusLogo} className='h-8 rounded-full' alt='Python' />,
    },
    { name: 'Jira', experience: '', icon: <img src={JiraLogo} className='h-8 rounded-full' alt='Python' /> },
    { name: 'Poetry', experience: '', icon: <img src={PoetryLogo} className='h-8 rounded-full' alt='Python' /> },
  ],
  achievements: [
    {
      title: 'AWS',
      subtitle: 'AWS Certified Solutions Architect – Associate',
      imageSrc: awsBadge,
      link: 'https://www.credly.com/badges/6f02979f-6462-4bff-a78f-73768771312c/public_url',
    },
    {
      title: 'GCP',
      subtitle: 'Google Certified Associate Cloud Engineer',
      imageSrc: gcpBadge,
      link: 'https://www.credly.com/badges/cc66c8ad-3b05-4c65-88af-78b115dc8b91/public_url',
    },
    { title: 'Nagarro', subtitle: 'The Brightest Mind - Annual Award', imageSrc: nagarro, link: '' },
    { title: 'Linux', subtitle: '', imageSrc: linux, link: '' },
    { title: 'DB2', subtitle: 'DB2 Database and Application Fundamentals', imageSrc: db2, link: '' },
  ],
  experience: [
    {
      title: 'Senior Software Engineer',
      companyName: 'Netskope',
      description: `Working as an Senior Software Engineer which involves developing new features, making architectural design decisions, taking initiative and doing research(POC), code reviews, writing unit tests, and collaborating with product and testing teams. Mentoring and leading junior engineers`,
      date: 'AUG 2021 - Present',
      contentArrowStyle: { borderRight: '7px solid rgb(33, 150, 243)' },
      textClassName: 'shadow-lg text-gray-100 bg-sky-600 border-b-[3px] border-gray-500',
      descriptionClassName: 'text-gray-300',
    },
    {
      title: 'Staff Engineer',
      companyName: 'Nagarro',
      description: `Worked as Team Lead in a team of 3 devs and 2 QA to deliver Organizational Diagnostic Tool.`,
      date: 'NOV 2018 - AUG 2021',
    },
    {
      title: 'Software Engineer',
      companyName: 'Metacube Softwares',
      description: 'Worked as individual contributer on microservices architecture having containerized services using Docker and Kubernetes',
      date: 'NOV 2016 - OCT 2018',
    },
    {
      title: 'Software Engineer',
      companyName: 'Q3 Technologies',
      description: 'Worked as individual contributer on multiple web applications in Angular and .NET',
      date: 'MAR 2015 - OCT 2016',
    },
    {
      title: 'Software Engineer',
      companyName: 'Softworld India Pvt. Ltd.',
      description: 'Worked on flagship ERP product of the company in .NET MVC',
      className: 'vertical-timeline-element--education',
      date: 'AUG 2014 - MAR 2015',
    },
  ],
};
