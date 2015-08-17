let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
let Master = require('./components/master.jsx');
let Login = require('./components/pages/login.jsx');

let AllActivities = require('./components/pages/all-activities.jsx');
let CurrentActivities = require('./components/pages/current-activities.jsx');
let Dashboard = require('./components/pages/dashboard.jsx');

let ProfileSettings = require('./components/pages/profile-settings.jsx');
let AppSettings = require('./components/pages/app-settings.jsx');

let AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="login" handler={Login} />
    <Route name="all-activities" handler={AllActivities} />
    <Route name="current-activities" handler={CurrentActivities} />
    <Route name="dashboard" handler={Dashboard} />
    <Route name="profile-settings" handler={ProfileSettings} />
    <Route name="app-settings" handler={AppSettings} />

    <DefaultRoute handler={Login}/>
  </Route>
);

module.exports = AppRoutes;
