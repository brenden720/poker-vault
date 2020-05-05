import React from 'react';
import { Link } from 'react-router-dom';

const Back = (props) => {
  const { route } = props;
  return (
    <Link to={route} className='btn btn-outline-dark btn-lg'>
      Back
    </Link>
  );
};

export default Back;
