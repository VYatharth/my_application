import { Link, Link as RouterLink } from '@tanstack/react-router';
import Landing from './Landing/Landing';

const Portfolio = () => {
  return (
    <>
      <h1 className="text-tahiti font-bold underline text-red-200">
      Hello world!
    </h1>
      <Landing />
      <div className='bg-yellow-200'>

      <p className='text-red-200'>This is my portfolio</p>
      </div>
      <Link  to="/admin" >
        Admin
      </Link>

    </>
  );
};

export default Portfolio;
