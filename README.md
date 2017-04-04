# BestCard: Know which of your rewards cards is best for each purchase

Problem: User has multiple credit cards, but can’t remember which card to use for which categories when they are approaching the checkout counter. If they could QUICKLY pull out their phone, press one of a few categories, and have the phone tell them which card is best for that category, it would ensure they always get the most rewards points/dollars/etc.

Solution: BestCard allows a user to just select a purchase category, and receive back their card(s) with the highest rewards percentage in that category. There is a quick signup process which involves selecting which cards they have from a list. Once signed up, the user will remain logged in until they logout, so they don't need to login before each purchase, making the app very quick to use and move on with their day.


## Issues and needed features:

* There's currently no way to edit or view a full list of a user's cards after the signup process.
* Users are unable to edit % categories for their specific situations, and % rates for one card card depend on other cards a user has (e.g. if you have the Chase Sapphire Reserve card, it essentially multiplies all other Chase UR points by 150%).
* Users can't delete their account.
* It might help to have a suggestion appear to the user for common situations like the Chase Sapphire Reserve example above, where the program will update other cards if the user agrees.
* There's no password/username retreival system.
* Security: Username/password authentication is functional, but a user can sidestep that process by simply setting a cookie in their browser with the key 'token' and value of whichever username they wish to log in as.
* Design: The design is good in the sense that it's simple and usable (large buttons), but it would benefit from some aesthetic upgrades.

Nice to have future features:
* Send users reminders to sign up for new categories at the beginning of each quarter with links to do so (https://www.chasebonus.com/ for Chase Freedom; Discover: https://www.discover.com/credit-cards/cashback-bonus/cashback-calendar.html).
* Add images for cards on results screen to make it easier for the user to identify the card in their wallet
  * Might need to allow for users to add custom images for their custom cards (and because new cards often have different looks from older versions of the same card)
  * Could just have a small DB of card images for users to pick from as well
* Allow users to enter cards and rewards information for cards not in our database
* Allow users to change % rate if they’ve hit the category cap (e.g. $1500 per category per quarter for Chase Freedom and Discover IT; $6000 per year for Amex Blue Cash on Groceries)
* Set up a way for users to rank their cards in a hierarchy so if there’s a tie, it shows their preferred card at the top and indicates it's their preference over the other card(s).
