import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export function Modal(props) {
  return (
    <div className='modal'>
      <div className='overlay-content'>
        <h3>Welcome to BestCard!</h3>
        <div>
          <p>We're here to help you maximize your credit card rewards by
          always picking the best card for each purchase.</p>
          <ul>
            <li>
              Different cards offer different rewards rates for certain
              categories of purchases.
            </li>
            <li>Many of the most popular (and rewarding!) cards change their
              categories each quarter, and some change sporadically.
            </li>
            <li>
              After a quick sign up process in which you'll tell us which
              cards you own, the rest of the app experience is simple:
              <ul>
                <li>
                  Whenever you are about to make a purchase, simply load
                  BestCard and select the category of your purchase.
                </li>
                <li>
                  BestCard will respond with your card (or multiple cards if there's a tie)
                  which will give you the most rewards for that purchase.
                </li>
                <li>
                  Whenever you get a new card or get rid of an existing card, let
                  us know and we'll update our recommendations to reflect your
                  current wallet.
                </li>
              </ul>
            </li>
          </ul>
          <p>If you have any questions or suggestions for improvements, please
          let us know: BestCardInfo@gmail.com</p>
          <a href="#" onClick={() => props.dispatch(actions.toggleInfoModal())}>Got It!</a>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({
//   showInfoModal: state.showInfoModal,
// })

export default connect()(Modal);
