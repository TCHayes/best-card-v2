import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import reducer from './reducers';
import CategoryList from './components/category-list';
import Recommendation from './components/Recommendation';
import Welcome from './components/welcome';
import Signup from './components/signup';
import cookie from 'react-cookie';
import CardChooser from './components/card-chooser';
import ForgotPass from './components/forgot-pass';
import ResetPass from './components/reset-pass';
import Faq from './components/faq';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

function checkAuth() {
  if (!cookie.load('token')){
    browserHistory.replace('/welcome');
  }
}

const routes =(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={CategoryList} onEnter={checkAuth} />
      <Route path='/category/:selection' component={Recommendation} onEnter={checkAuth} />
      <Route path='/welcome' component={Welcome} />
      <Route path='/signup' component={Signup} />
      <Route path='/allCards' component={CardChooser} />
      <Route path='/forgotpass' component={ForgotPass} />
      <Route path='/resetpass/:resetString' component={ResetPass} />
      <Route path='/faq' component={Faq} />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
