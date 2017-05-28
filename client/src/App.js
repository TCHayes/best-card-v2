import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './components/info-modal';
import '../public/css/main.css';
import '../public/css/modal.css';
import '../public/font-awesome-4.7.0/css/font-awesome.css';

import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    this.props.dispatch(actions.toggleInfoModal());
  }

  render() {
    const appContent = this.props.showInfoModal ? <Modal /> : this.props.children
    return (
      <div className="app">
        <div className="app-header">
          <div className='app-header-content'>
            <h2 className='app-title'>BestCard</h2>
            <i className="fa fa-info-circle" aria-hidden="true" onClick={this.toggleInfo}></i>
          </div>
        </div>
        {appContent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showInfoModal: state.showInfoModal,
})

export default connect(mapStateToProps)(App);
