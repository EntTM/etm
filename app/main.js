/* @flow */

import '../css/app.css';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import router from './router';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';



injectTapEventPlugin();


var app   = combineReducers(reducers),
    store = createStore(app);


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
