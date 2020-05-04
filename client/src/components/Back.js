import React from 'react';
import { Link } from 'react-router-dom';

const Back = (props) => {
  return (
    <Link to='/' className='btn btn-outline-dark btn-lg'>
      Back
    </Link>
  );
};

export default Back;
