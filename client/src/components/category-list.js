import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import CategoryButton from './category-button';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
import '../../public/css/main.css'

export class CategoryList extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchUser());
  }

  logout(e) {
    cookie.remove('token');
    cookie.remove('headers');
    browserHistory.replace('/welcome');
  }

  render() {
    if (!this.props.cards.length) return <div />
    const categories = Object.keys(this.props.cards[0].categories);
    return (
      <div className='CategoryList'>
        <h3>Select purchase category</h3>
        <CategoryButton categories={categories} />
        <button className='logout' onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    cards: state.userCards
});

export default connect(mapStateToProps)(CategoryList)
