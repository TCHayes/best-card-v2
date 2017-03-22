import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import CategoryButton from './category-button';
import '../../public/css/main.css'

export class CategoryList extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchCards());

    }

    render() {

        if (!this.props.cards.length) return <div/>
        const categories = Object.keys(this.props.cards[0].categories);
        console.log(categories);
        return (
            <div className='CategoryList'>

                {/* Page Title? */}

                <h3>Select purchase category</h3>
                <CategoryButton categories={categories}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    cards: state.cards
});

export default connect(mapStateToProps)(CategoryList)
