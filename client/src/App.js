import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Modal from './components/info-modal';
import '../public/css/main.css';
import '../public/css/modal.css';
import '../public/font-awesome-4.7.0/css/font-awesome.css';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.logout = this.logout.bind(this);
    this.edit = this.edit.bind(this);
  }

  logout(){
    this.props.dispatch(actions.logout());
  }

  toggleInfo() {
    this.props.dispatch(actions.toggleInfoModal());
  }

  edit() {
    browserHistory.push('/allCards');
  }

  render() {
    const appContent = this.props.showInfoModal ? <Modal /> : this.props.children;
    const navIcons = this.props.username ? (
      <div className='nav'>
        <i className="fa fa-info-circle info-btn" aria-hidden="true" onClick={this.toggleInfo}></i>
        <i className="fa fa-credit-card" aria-hidden="true" onClick={this.edit}></i>
        <i className="fa fa-sign-out " aria-hidden="true" onClick={this.logout}></i>
      </div>
    ) : <div className='nav'><i className="fa fa-info-circle info-btn" aria-hidden="true"
      onClick={this.toggleInfo}></i></div>;
      
    return (
      <div className="app">
        <div className="app-header">
          <h2 className='app-title'>BestCard</h2>
          <div className='app-header-content'>
          </div>
          {navIcons}
        </div>
        {appContent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showInfoModal: state.showInfoModal,
  username: state.username,
})

export default connect(mapStateToProps)(App);
