import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import CategoryButton from './category-button';
import '../../public/css/main.css'
import { browserHistory } from 'react-router';

export class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchUser());
  }

  edit() {
    browserHistory.push('/allCards');
  }

  render() {
    if (!this.props.cards.length) return <div />
    const categories = Object.keys(this.props.cards[0].categories);
    return (
      <div className='CategoryList'>
        <h3>Select purchase category</h3>
        <CategoryButton categories={categories} />
        <button className='btn edit-cards' onClick={this.edit}>Edit Cards</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    cards: state.userCards,
    error: state.error,
});

export default connect(mapStateToProps)(CategoryList);
