# [BestCard](https://secure-lake-16708.herokuapp.com/)
## Always know which of your credit cards offers the best rewards for each purchase

### Overview

Problem: User has multiple credit cards, but can’t remember which card to use for which categories when they are approaching the checkout counter. If they could *quickly* pull out their phone, press one of a few categories, and have the phone tell them which card is best for that category, it would ensure they always get the most rewards points/dollars/etc.

Solution: BestCard allows a user to just select a purchase category, and receive back their card(s) with the highest rewards percentage in that category. There is a quick signup process which involves selecting which cards they have from a list. Once signed up, the user will remain logged in until they logout, so they don't need to login before each purchase, making the app very quick to use and move on with their day.

### Screenshots
![BestCard Tour GIF](https://github.com/TCHayes/best-card-v2/blob/master/screenshots/BestCardDemo.gif "BestCard Tour GIF")

### Backend

The backend of this app is built on Node and Express, and uses MongoDB and Mongoose to store cards and users (there are two collections).

## Technology
* JavaScript
* React
* Redux
* Node
* Express
* MongoDB
* React-Router
* NodeMailer (for password reset emails)
* HTML5
* CSS3
