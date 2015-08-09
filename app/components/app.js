/* @flow */

import React from 'react';
import {combineReducers, createStore} from 'redux';
import * as reducers from '../reducers';
import {Provider} from 'react-redux';
import {RouteHandler} from 'react-router';



var app   = combineReducers(reducers),
    store = createStore(app);


class App extends React.Component {
  render(): React.Element {
    return (
      <Provider store={store}>
      {() => <RouteHandler />}
      </Provider>
    );
  }
}

export default App;
