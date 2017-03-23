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
import Login from './components/login';
import cookie from 'react-cookie';

const store = createStore(reducer, applyMiddleware(thunk));

let routes;
if (cookie.load('token')){
  routes =(
        <Router history={browserHistory}>
            <Route path='/' component={App}>
              <IndexRoute component={CategoryList} />
              <Route path=':selection' component={Recommendation} />
            </Route>
        </Router>
  );
} else {
  routes =(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </Route>
    </Router>
  );
}


ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
