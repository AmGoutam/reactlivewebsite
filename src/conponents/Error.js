import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Opps! 404 Page is Not Found.</h1>
      <Link className='btn btn-outline-primary' to={'/'}>Back to Home Page</Link>
    </div>
  )
}

export default Error
