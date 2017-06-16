import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

export function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Welcome to BestCard!</h3>
        </div>
        <div className="modal-body">
          <p>We're here to help you maximize your credit card rewards by
          always picking the best card for each purchase.</p>
          <p><i>A quick note about what this app does/doesn't do: this app will tell you
          which of your cards is the best to use for any given purchase; it won't
          suggest which cards you should apply for. There are countless sites that
          help with that decision process (<a href='https://thepointsguy.com/'>The Points Guy</a> is
          a favorite), and it can be as time consuming/complex as you wish to
          make it. BestCard's goal is simply to help you extract the most value
          from your existing cards.</i></p>
          <p>Credit card rewards are the best they've ever been, but keeping
          track of the details can be burdensome. Different cards offer
          different rewards rates for certain categories of purchases. Many of
          the most popular - and rewarding - cards change their categories each
          quarter, and some change sporadically.</p>
          <p>With BestCard, just tell us which cards you have, and next time
          you're going to make a purchase, check the app to see which of your
          card(s) will give you the most rewards.</p>
          <p>For details on how we calculate the percentages for each card, and
          further information about how we determine which cards to use, please
          see our <Link to="/faq" className='link'>FAQ page</Link> (coming soon!).</p>
          <p>If you have any questions or suggestions for improvements, please
          let us know: <a href="mailto:BestCardInfo@gmail.com" target="_blank">BestCardInfo@gmail.com</a></p>
        </div>
        <div className="modal-footer">
          <a href="#" className='modal-got-it' onClick={() => props.dispatch(actions.toggleInfoModal())}>Ok, let's go!</a>
        </div>
      </div>
    </div>
  );
}

export default connect()(Modal);
