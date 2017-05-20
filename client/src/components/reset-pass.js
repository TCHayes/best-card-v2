import React from 'react';
import '../../public/css/main.css';
import { browserHistory } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

export class ResetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 'hidden',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.password.value !== this.confirmpass.value){
      this.setState({error: "Passwords don't match"})
    } else {
      this.setState({error: 'hidden'})
      let formData = {
        resetPassLink: this.props.params.resetString,
        newPassword: this.password.value,
      };
      this.props.dispatch(actions.resetPassword(formData));
      browserHistory.push('/welcome');
    }
  }

  render(){
    return (
      <div className='reset-pass-container'>
        <h1>Reset Password</h1>
        <div className={this.state.error}>Passwords don't match. Please try again.</div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="new-password">Password</label>
          <input type='password' id="new-password" ref={ref => this.password = ref}
                                            placeholder="New Password"></input>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type='password' id="confirm-password" ref={ref => this.confirmpass = ref}
                                            placeholder="Confirm Password"></input>
          <button type='submit' className='btn submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(ResetPass);
