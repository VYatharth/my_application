import {
  BiLogo99Designs,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoMedium,
  BiLogoPython,
  BiLogoReact,
  BiSolidCloud,
} from 'react-icons/bi';
import PythonLogo from '../assets/images/python.png';
import FastapiLogo from '../assets/images/fastapi.png';
import AngularLogo from '../assets/images/angular.png';
import AwsLogo from '../assets/images/aws-logo.png';
import ReactLogo from '../assets/images/react.png';
import JsLogo from '../assets/images/javascript.png';
import HtmlLogo from '../assets/images/html-logo.png';
import DockerLogo from '../assets/images/docker-logo.png';
import KubernetesLogo from '../assets/images/kubernetes.png';
import GcpLogo from '../assets/images/gcp4.png';
import KafkaLogo from '../assets/images/kafka.png';
import MysqlLogo from '../assets/images/mysql.png';
import EsLogo from '../assets/images/es.png';
import Zookeeper from '../assets/images/zookeeper1.png';
import OktaLogo from '../assets/images/okta.png';
import VscodeLogo from '../assets/images/vscode.png';
import Jaeger from '../assets/images/jaeger.png';
import GithubLogo from '../assets/images/github.png';
import PostmanLogo from '../assets/images/postman.png';
import SonarqubeLogo from '../assets/images/sq.png';
import JenkinsLogo from '../assets/images/jenkins.png';
import PrometheusLogo from '../assets/images/prometheus.png';
import JiraLogo from '../assets/images/jira.png';
import PoetryLogo from '../assets/images/poetry.png';
import awsBadge from '../assets/images/aws-badge.png';
import gcpBadge from '../assets/images/gcp-certification.png';
import nagarro from '../assets/images/nagarro.png';
import db2 from '../assets/images/db2.png';
import linux from '../assets/images/linux.png';
import Mongo from '../assets/images/mongodb.png';

export const portfolioData = {
  description: `Senior Software Engineer specializing in architecting and developing large-scale distributed systems within fast-paced
agile environments. Skilled in backend development using Python (FastAPI) and frontend development with React.
Experienced in leading and mentoring teams. `,
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
      skill: 'Large Scale Distributed Systems',
      description:
        'Created and maintained large scale distributed systems with high availability and low latency requirements.',
      icon: <BiLogo99Designs className='text-2xl text-white' />,
    },
    {
      skill: 'Cloud Engineer (GCP and AWS)',
      description: 'Experienced in deploying and managing applications on GCP and AWS',
      icon: <BiSolidCloud className='text-2xl text-white' />,
    },
    {
      skill: 'Python Developer',
      description: 'Created multiple Python applications using FastAPI and Flask',
      icon: <BiLogoPython className='text-2xl text-white' />,
    },
    {
      skill: 'React Developer',
      description: 'Experienced in developing web applications using ReactJS',
      icon: <BiLogoReact className='text-2xl text-white' />,
    },
  ],
  technologiesUsed: [
    { name: 'Python', experience: '', icon: <img src={PythonLogo} className='h-16 rounded-full' alt='Python' /> },
    { name: 'FastAPI', experience: '', icon: <img src={FastapiLogo} className='h-10 rounded-full' alt='FastAPI' /> },
    { name: 'React', experience: '', icon: <img src={ReactLogo} className='h-8 rounded-full' alt='React' /> },
    { name: 'Javascript', experience: '', icon: <img src={JsLogo} className='h-8 rounded-full' alt='Javascript' /> },
    { name: 'MongoDB', experience: '', icon: <img src={Mongo} className='h-12 rounded-full' alt='MongoDB' /> },
    { name: 'HTML', experience: '', icon: <img src={HtmlLogo} className='h-6 rounded-full' alt='HTML' /> },
    { name: 'Docker', experience: '', icon: <img src={DockerLogo} className='h-8 rounded-full' alt='Docker' /> },
    {
      name: 'Kubernetes',
      experience: '',
      icon: <img src={KubernetesLogo} className='h-12 rounded-full' alt='Kubernetes' />,
    },
    { name: 'AWS', experience: '', icon: <img src={AwsLogo} className='h-12 rounded-full' alt='AWS' /> },
    { name: 'GCP', experience: '', icon: <img src={GcpLogo} className='h-12 rounded-full' alt='GCP' /> },
    { name: 'Kafka', experience: '', icon: <img src={KafkaLogo} className='h-8 rounded-full' alt='Kafka' /> },
    { name: 'MySQL', experience: '', icon: <img src={MysqlLogo} className='h-8 rounded-full' alt='MySQL' /> },
    { name: 'Angular', experience: '', icon: <img src={AngularLogo} className='h-4 rounded-full' alt='Angular' /> },
    {
      name: 'ElasticSearch',
      experience: '',
      icon: <img src={EsLogo} className='h-8 rounded-full' alt='ElasticSearch' />,
    },
    { name: 'Zookeeper', experience: '', icon: <img src={Zookeeper} className='h-8 rounded-full' alt='Zookeeper' /> },
    { name: 'Okta', experience: '', icon: <img src={OktaLogo} className='h-8 rounded-full' alt='Okta' /> },
  ],
  toolsUsed: [
    { name: 'VSCode', experience: '', icon: <img src={VscodeLogo} className='h-8 rounded-full' alt='VSCode' /> },
    { name: 'Github', experience: '', icon: <img src={GithubLogo} className='h-8 rounded-full' alt='Github' /> },
    { name: 'Postman', experience: '', icon: <img src={PostmanLogo} className='h-8 rounded-full' alt='Postman' /> },
    {
      name: 'SonarQube',
      experience: '',
      icon: <img src={SonarqubeLogo} className='h-8 rounded-full' alt='SonarQube' />,
    },
    { name: 'Jenkins', experience: '', icon: <img src={JenkinsLogo} className='h-8 rounded-full' alt='Jenkins' /> },
    { name: 'Jaeger', experience: '', icon: <img src={Jaeger} className='h-8 rounded-full' alt='Jaeger' /> },
    {
      name: 'Prometheus',
      experience: '',
      icon: <img src={PrometheusLogo} className='h-8 rounded-full' alt='Prometheus' />,
    },
    { name: 'Jira', experience: '', icon: <img src={JiraLogo} className='h-8 rounded-full' alt='Jira' /> },
    { name: 'Poetry', experience: '', icon: <img src={PoetryLogo} className='h-8 rounded-full' alt='Poetry' /> },
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
      description: `Serve as a Senior Software Engineer, responsible for designing and developing new features, making key architectural decisions, driving technical initiatives and proof-of-concepts, conducting code reviews, writing unit tests, and collaborating closely with product and QA teams. Also mentor and lead junior engineers.`,
      date: 'AUG 2021 - Present',
      contentArrowStyle: { borderRight: '7px solid rgb(33, 150, 243)' },
      textClassName: 'shadow-lg text-gray-100 bg-sky-600 border-b-[3px] border-gray-500',
      descriptionClassName: 'text-gray-300',
    },
    {
      title: 'Staff Engineer',
      companyName: 'Nagarro',
      description: `Led a team of 3 developers and 2 QA engineers, overseeing the end-to-end development and successful deployment of multiple applications to production.`,
      date: 'NOV 2018 - AUG 2021',
    },
    {
      title: 'Software Engineer',
      companyName: 'Metacube Softwares',
      description:
        'Contributed as a developer to the design and implementation of microservices architecture, building containerized services using Docker and Kubernetes.',
      date: 'NOV 2016 - OCT 2018',
    },
    {
      title: 'Software Engineer',
      companyName: 'Q3 Technologies',
      description: 'Worked as individual contributer on multiple web applications in Python and Angular.',
      date: 'MAR 2015 - OCT 2016',
    },
    {
      title: 'Software Engineer',
      companyName: 'Softworld India Pvt. Ltd.',
      description: 'Worked on flagship ERP product of the company.',
      className: 'vertical-timeline-element--education',
      date: 'AUG 2014 - MAR 2015',
    },
  ],
};
