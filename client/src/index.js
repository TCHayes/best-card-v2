import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import reducer from './reducers';
import CategoryList from './components/category-list';
import Recommendation from './components/Recommendation';

const store = createStore(reducer, applyMiddleware(thunk));

const routes =(
      <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={CategoryList} />
            <Route path=':selection' component={Recommendation} />
          </Route>
      </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
