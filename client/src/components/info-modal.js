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
          <p>I'm here to help you maximize your credit card rewards by
          always picking the best card for each purchase.</p>
        <p>This app...</p>
          <ul>
            <li><b>Will:</b> tell you which of your cards is the best to use for
              any given purchase</li>
            <li><b>Won't:</b> suggest which cards you should apply for. There are countless sites that
            help with that decision process (I recommend <a href='https://thepointsguy.com/'>The Points Guy</a>).</li>
          </ul>
          <p>BestCard's goal is simply to help you extract the most value
          from your existing cards.</p>
          <hr />
          <p>Credit card rewards are the best they've ever been, but keeping
          track of the details can be burdensome. Different cards offer
          different rewards rates for certain categories of purchases. Many of
          the most popular cards change their categories each
          quarter, and some change sporadically.</p>
          <p>With BestCard, just select which cards you have, and when you're
          about to make a purchase, quickly check the app to see which of your
          card(s) will give you the most rewards.</p>
        <p>For details on how I calculate the rewards for each card, please
          see the <Link to="/faq" className='link' onClick={() => props.dispatch(actions.turnInfoModalOff())}>FAQ page</Link>.</p>
        <p>If you have any questions or comments, please let me
          know: <a href="mailto:BestCardInfo@gmail.com" target="_blank">BestCardInfo@gmail.com</a></p>
        </div>
        <div className="modal-footer">
          <a href="#" className='modal-got-it' onClick={() => props.dispatch(actions.turnInfoModalOff())}>Ok, got it!</a>
        </div>
      </div>
    </div>
  );
}

export default connect()(Modal);
