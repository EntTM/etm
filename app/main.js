/* @flow */

import '../css/app.css';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from 'react-router';
import routes from './routes';



injectTapEventPlugin();


function main() {
  Router.run(routes, Router.HashLocation, (Root) => {
    React.render(
      <Root />,
      document.getElementById('app'));
  });
}

main();
