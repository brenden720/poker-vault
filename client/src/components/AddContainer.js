import React from 'react';
import { Link } from 'react-router-dom';
import Back from './Back';

class AddContainer extends React.Component {
  render() {
    const { mainHeader, subHeader, route1, backRoute } = this.props;
    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>{mainHeader}</h1>
          <Back route={backRoute} />
          <h3 className='text-dark text-center mb-3'>{subHeader}</h3>
          <div className='row w-50 mx-auto'>
            <div className='col'>
              <Link
                to={route1}
                className='btn btn-outline-dark btn-lg btn-block'
              >
                Add
              </Link>
              <Link to='#' className='btn btn-outline-dark btn-lg btn-block'>
                Placeholder
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContainer;
