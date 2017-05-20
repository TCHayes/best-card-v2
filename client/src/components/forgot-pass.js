import React from 'react';
import '../../public/css/main.css';
import { browserHistory } from 'react-router';
// import cookie from 'react-cookie';
// import basic from 'basic-authorization-header';
import * as actions from '../actions';
import { connect } from 'react-redux';

export class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetText: 'hidden',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = {email: this.email.value};
    // this.props.dispatch(actions.sendResetPasswordEmail(formData));
    this.setState({resetText: ''});
    setTimeout(function() {browserHistory.push('/')}, 3000);
  }

  render(){
    return (
      <div className='forgot-pass-container'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">Email:</label>
          <input type='text' id="email" ref={ref => this.email = ref} placeholder="Email"></input>
          <button type='submit' className='btn submit-btn'>Submit</button>
        </form>
        <div className={`reset-text ${this.state.resetText}`}>An email with
          password reset instructions has been sent to the entered address.
        </div>
      </div>
    )
  }
}

export default connect()(ForgotPass);
