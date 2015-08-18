/* @flow */

import '../css/app.css';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import router from './router';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import fetch from 'whatwg-fetch';



injectTapEventPlugin();


var createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

var app   = combineReducers(reducers),
    store = createStoreWithMiddleware(app);


function main() {
  router.run((Root) => {
    React.render(
      <Provider store={store}>
        {() => <Root />}
      </Provider>,
      document.getElementById('app'));
  });
}

main();
