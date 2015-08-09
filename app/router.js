/* @flow */

import routes from './routes';
import Router from 'react-router';



var router = Router.create({
  routes,
  location: Router.HashLocation,
  scrollBehavior: Router.ScrollToTopBehavior
});

export default router;
