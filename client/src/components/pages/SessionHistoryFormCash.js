import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import Back from '../Back';
import SettingDropdown from '../SettingDropdown';
import { createCashSession, fetchSessions } from '../../actions';

class SessionHistoryFormCash extends React.Component {
  onSubmit = formProps => {
    this.props.createCashSession(formProps);
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
        as='textarea'
        rows='3'
        placeholder={placeholder}
        value={input.value}
        onChange={input.onChange}
      />
    );
  };

  render() {
    return (
      <div className='container'>
        <div className='info-header'>
          <h1 className='text-dark text-center'>Session History</h1>
          <Back route='/sessions/cash/all' />
          <h3 className='text-dark text-center mb-3'>Cash Game Input</h3>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className='form-row'>
              <div className='col-md'>
                <Form.Group controlId='formBasicGameType'>
                  <Form.Label className='d-block'>Game</Form.Label>
                  <SettingDropdown
                    settings={this.props.settings.game}
                    name={'game'}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicStakeLevel'>
                  <Form.Label className='d-block'>Stake</Form.Label>
                  <SettingDropdown
                    settings={this.props.settings.stake}
                    name={'stake'}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicLimitType'>
                  <Form.Label className='d-block'>Limit Type</Form.Label>
                  <SettingDropdown
                    settings={this.props.settings.limit_type}
                    name={'limit_type'}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicLocation'>
                  <Form.Label className='d-block'>Location</Form.Label>
                  <SettingDropdown
                    settings={this.props.settings.location}
                    name={'location'}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicLocationType'>
                  <Form.Label className='d-block'>Location Type</Form.Label>
                  <SettingDropdown
                    settings={this.props.settings.location_type}
                    name={'location_type'}
                  />
                </Form.Group>
              </div>
              <div className='col-md'>
                <Form.Group controlId='formBasicStartTime'>
                  <Form.Label>Start Time</Form.Label>
                  <Field
                    name='start_time'
                    type='text'
                    component={this.renderInput}
                    placeholder='Start Time'
                  />
                </Form.Group>
                <Form.Group controlId='formBasicEndTime'>
                  <Form.Label>End Time</Form.Label>
                  <Field
                    name='end_time'
                    type='text'
                    component={this.renderInput}
                    placeholder='End Time'
                  />
                </Form.Group>
                <Form.Group controlId='formBasicBuyIn'>
                  <Form.Label>Buy-In</Form.Label>
                  <Field
                    name='buy_in'
                    type='number'
                    component={this.renderInput}
                    placeholder='Buy-In'
                  />
                </Form.Group>
                <Form.Group controlId='formBasicCashedOut'>
                  <Form.Label>Cashed Out</Form.Label>
                  <Field
                    name='cashed_out'
                    type='number'
                    component={this.renderInput}
                    placeholder='Cashed Out'
                  />
                </Form.Group>
                <Form.Group controlId='formBasicTips'>
                  <Form.Label>Tips</Form.Label>
                  <Field
                    name='tips'
                    type='number'
                    component={this.renderInput}
                    placeholder='Tips'
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group controlId='formBasicNotes'>
              <Form.Label>Notes</Form.Label>
              <Field
                name='notes'
                type='textarea'
                component={this.renderTextArea}
                placeholder='Notes'
              />
            </Form.Group>
            <button
              type='submit'
              className='btn btn-outline-dark btn-lg btn-block'
            >
              Add Session
            </button>
          </Form>
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className='container'>
  //       <div className='info-header'>
  //         <h1 className='text-dark text-center'>Session History</h1>
  //         <Back route='/sessions/cash/all' />
  //         <h3 className='text-dark text-center mb-3'>Cash Game Input</h3>
  //         <Form onSubmit={this.onSubmit}>
  //           <div className='form-row'>
  //             <div className='col-md'>
  //               <Form.Group controlId='formBasicGameType'>
  //                 <Form.Label>Game</Form.Label>
  //                 <Form.Control type='text' placeholder='Game type' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicStakeLevel'>
  //                 <Form.Label>Stake</Form.Label>
  //                 <Form.Control type='text' placeholder='Stake Level' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicLimitType'>
  //                 <Form.Label>Limit Type</Form.Label>
  //                 <Form.Control type='text' placeholder='Limit Type' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicLocation'>
  //                 <Form.Label>Location</Form.Label>
  //                 <Form.Control type='text' placeholder='Location' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicLocationType'>
  //                 <Form.Label>Location Type</Form.Label>
  //                 <Form.Control type='text' placeholder='Location Type' />
  //               </Form.Group>
  //             </div>
  //             <div className='col-md'>
  //               <Form.Group controlId='formBasicStartTime'>
  //                 <Form.Label>Start Time</Form.Label>
  //                 <Form.Control type='text' placeholder='Start Time' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicEndTime'>
  //                 <Form.Label>End Time</Form.Label>
  //                 <Form.Control type='text' placeholder='End Time' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicBuyIn'>
  //                 <Form.Label>Buy-In</Form.Label>
  //                 <Form.Control type='text' placeholder='Buy-In' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicCashedOut'>
  //                 <Form.Label>Cashed Out</Form.Label>
  //                 <Form.Control type='text' placeholder='Cashed Out' />
  //               </Form.Group>
  //               <Form.Group controlId='formBasicTips'>
  //                 <Form.Label>Tips</Form.Label>
  //                 <Form.Control type='text' placeholder='Tips' />
  //               </Form.Group>
  //             </div>
  //           </div>
  //           {/* <Link
  //             to='/sessions/cash/all'
  //             className='btn btn-outline-dark btn-lg btn-block'
  //           >
  //             Add Session
  //           </Link> */}
  //           <button
  //             type='submit'
  //             className='btn btn-outline-dark btn-lg btn-block'
  //           >
  //             Add Session
  //           </button>
  //         </Form>
  //       </div>
  //     </div>
  //   );
  // }
}

// export default connect(null, { createCashSession })(SessionHistoryFormCash);
const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

const formWrapped = reduxForm({
  form: 'sessionHistoryCashForm',
})(SessionHistoryFormCash);

export default connect(mapStateToProps, { createCashSession, fetchSessions })(
  formWrapped,
);
