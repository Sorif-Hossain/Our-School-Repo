import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='container text-center mt-5'>
      <h2 className='text-danger'>This page doesn't exit. 404 Error</h2>
      <Link to='/'>
      <button className='btn btn-success mb-5 py-2 px-4 fw-bold'>HOME</button>
      </Link>
    </div>
  );
}

export default NotFound;
