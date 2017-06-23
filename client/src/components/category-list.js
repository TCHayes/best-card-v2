import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import CategoryButton from './category-button';
import '../../public/css/main.css'

export class CategoryList extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchCards());
    this.props.dispatch(actions.fetchUser());
  }

  render() {
    if (!this.props.cards.length) return <div />                    //TODO This should redirect to either login or edit cards
    const categories = Object.keys(this.props.cards[0].categories).sort();
    return (
      <div className='CategoryList'>
        <h3>Which type of purchase are you making?</h3>
        <CategoryButton categories={categories} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    cards: state.userCards,
    error: state.error,
    email: state.email,
});

export default connect(mapStateToProps)(CategoryList);
