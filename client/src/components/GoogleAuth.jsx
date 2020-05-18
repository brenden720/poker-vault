import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import history from '../history';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1013799142216-g0ivstsfft5n0saeugb17puqcqic57jl.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signIn, signOut } = this.props;
    if (isSignedIn) {
      const userId = this.auth.currentUser.get().getId();
      const fullName = this.auth.currentUser.get().getBasicProfile().getName();
      const email = this.auth.currentUser.get().getBasicProfile().getEmail();

      signIn({ userId, fullName, email });
    } else {
      signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
    history.push('/');
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <button
          type="button"
          onClick={this.onSignOutClick}
          className="btn btn-primary"
        >
          Sign Out
        </button>
      );
    }

    return (
      <button
        type="button"
        onClick={this.onSignInClick}
        className="btn btn-primary"
      >
        Sign In With Google
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
