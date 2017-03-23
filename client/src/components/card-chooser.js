import React from 'react';
import '../../public/css/main.css'
import * as actions from '../actions';
import {connect} from 'react-redux';
import Card from './card';



export class CardChooser extends React.Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchCards());
    }

    render() {
        const cards = this.props.cards.map((card, index) => <Card key={index}
                                                                name={card.name}/>)
        return (
            <div>
                {cards}
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {cards: state.cards}
}

export default connect(mapStateToProps)(CardChooser);
