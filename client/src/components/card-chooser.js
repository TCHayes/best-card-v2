import React from 'react';
import '../../public/css/main.css'
import * as actions from '../actions';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import Card from './card';

export class CardChooser extends React.Component {
    constructor(props) {
      super(props);
      this.submitCards = this.submitCards.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(actions.fetchCards());
    }

    submitCards(){
      let formData = {
        username: this.props.username,
        cards: this.props.cards
      }
      this.props.dispatch(actions.addUserCards(formData));
      const path = '/';
      browserHistory.push(path);
    }

    render() {
        const cards = this.props.cards.map((card, index) => <Card key={index}
                                                                name={card.name}
                                                              toggled={card.toggled}
                                                              index={index}/>)

        return (
            <div>
              <h3>Please Select Your Cards</h3>
              {cards}
              <button className='btn submit-cards' onClick={this.submitCards}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
      cards: state.cards,
      username: state.username,
    }
}

export default connect(mapStateToProps)(CardChooser);
