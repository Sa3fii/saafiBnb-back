import { Link } from 'react-router-dom';
import './Page404.css';
// import { Container } from 'tailwindcss-react';

const Page404 = () => {
  
  return <div className='container page404'>
    <p>It looks like you're lost!</p>
    <Link to="/">Go home</Link>
  </div>
};

export default Page404;