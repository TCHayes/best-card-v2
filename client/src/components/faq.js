import React from 'react';
import '../../public/css/main.css'

export default function Faq () {

  return (
    <div className='faq'>
      <div className="faq-header">
        <h3>Frequently Asked Questions</h3>
      </div>
      <p><b>A note about point valuations in this app: all are valued at 1 cent,
      with one important exception: Chase Ultimate Rewards points.</b></p>
      <p>I've temporarily set the value on these at
      1.5 cents for all users. This is because with the Chase Sapphire Reserve card, you get
      a 50% bonus when you redeem your points for travel through the
      Ultimate Rewards site. I view this as a VERY easy process that doesn't
      require any of the timing and/or planning challenges that can come with
      more complicated redemption methods (like transferring to airlines partners),
      so I make the assumption that this is how you'll redeem your Chase points.</p>
      <p>If you redeem your points for cash (or you don't have the Sapphire Reserve
      card), your effective percent will be lower than the value I'm using to calculate
      which card you should use. In the future, I'll add the option to
      edit your own cards' percentages to reflect your personal situation, but
      in the meantime this is something to be aware of.</p>
    </div>
  )
}
