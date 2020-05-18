import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import history from '../../history';

class Home extends React.Component {
  componentDidUpdate() {
    const { isSignedIn } = this.props;

    if (isSignedIn) {
      history.push('/sessions');
    }
  }

  render() {
    return (
      <>
        <header id="home-section">
          <div className="dark-overlay"></div>
          <div className="home-inner container"></div>
          <h1 className="text-center display-1 bg-dark text-white my-5">
            Welcome to Poker Vault
          </h1>
          <h2 className="text-center display-2 bg-dark text-white">
            Track Your Wins And Analyze <br /> Your Sessions
          </h2>
        </header>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, null)(Home);
