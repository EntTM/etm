/* @flow */

import '../css/app.css';
import React from 'react';
import Hello from './component';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';
import {Provider} from 'react-redux';



injectTapEventPlugin();


var app = combineReducers(reducers),
  store = createStore(app);


function main() {
  React.render(
    <Provider store={store}>
      {() => <Hello />}
    </Provider>,
    document.getElementById('app'));
}

main();
