import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Back from '../Back';
import SettingDropdown from '../SettingDropdown';
import { createCashSession, fetchSessions } from '../../actions';
import SessionTime from '../SessionTime';
import '../../assets/reactDateTime.css';

class SessionHistoryFormCash extends React.Component {
  onSubmit = (formProps) => {
    const { createCashSession } = this.props;
    createCashSession(formProps);
  };

  renderInput = ({ input, type, placeholder }) => {
    return (
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
      />
    );
  };

  renderTextArea = ({ input, placeholder }) => {
    return (
      <Form.Control
        as="textarea"
        rows="3"
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
      />
    );
  };

  render() {
    const {
      handleSubmit,
      settings: { game, stake, limit_type, location, location_type },
    } = this.props;
    return (
      <div className="container">
        <div className="info-header">
          <h1 className="text-dark text-center">Session History</h1>
          <Back route="/sessions/cash/all" />
          <h3 className="text-dark text-center mb-3">Cash Game Input</h3>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form-row">
              <div className="col-md">
                <Form.Group controlId="formBasicGameType">
                  <Form.Label className="d-block">Game</Form.Label>
                  <SettingDropdown settings={game} name="game" />
                </Form.Group>
                <Form.Group controlId="formBasicStakeLevel">
                  <Form.Label className="d-block">Stake</Form.Label>
                  <SettingDropdown settings={stake} name="stake" />
                </Form.Group>
                <Form.Group controlId="formBasicLimitType">
                  <Form.Label className="d-block">Limit Type</Form.Label>
                  <SettingDropdown settings={limit_type} name="limit_type" />
                </Form.Group>
                <Form.Group controlId="formBasicLocation">
                  <Form.Label className="d-block">Location</Form.Label>
                  <SettingDropdown settings={location} name="location" />
                </Form.Group>
                <Form.Group controlId="formBasicLocationType">
                  <Form.Label className="d-block">Location Type</Form.Label>
                  <SettingDropdown
                    settings={location_type}
                    name="location_type"
                  />
                </Form.Group>
              </div>
              <div className="col-md">
                <Form.Group controlId="formBasicStartTime">
                  <SessionTime label="Start Time" />
                </Form.Group>
                <Form.Group controlId="formBasicEndTime">
                  <SessionTime label="End Time" />
                </Form.Group>
                <Form.Group controlId="formBasicBuyIn">
                  <Form.Label>Buy-In</Form.Label>
                  <Field
                    name="buy_in"
                    type="number"
                    component={this.renderInput}
                    placeholder="Buy-In"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCashedOut">
                  <Form.Label>Cashed Out</Form.Label>
                  <Field
                    name="cashed_out"
                    type="number"
                    component={this.renderInput}
                    placeholder="Cashed Out"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicTips">
                  <Form.Label>Tips</Form.Label>
                  <Field
                    name="tips"
                    type="number"
                    component={this.renderInput}
                    placeholder="Tips"
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group controlId="formBasicNotes">
              <Form.Label>Notes</Form.Label>
              <Field
                name="notes"
                type="textarea"
                component={this.renderTextArea}
                placeholder="Notes"
              />
            </Form.Group>
            <button
              type="submit"
              className="btn btn-outline-dark btn-lg btn-block"
            >
              Add Session
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

const formWrapped = reduxForm({
  form: 'sessionHistoryCashForm',
})(SessionHistoryFormCash);

export default connect(mapStateToProps, { createCashSession, fetchSessions })(
  formWrapped
);
