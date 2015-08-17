(function () {

  let React = require('react'),
    Router = require('react-router'),
    AppRoutes = require('./app-routes.jsx'),
    injectTapEventPlugin = require("react-tap-event-plugin");

  window.React = React;

  injectTapEventPlugin();

  Router
    .create({
      routes: AppRoutes,
      scrollBehavior: Router.ScrollToTopBehavior
    })
    // This is our callback function, whenever the url changes it will be called again.
    // Handler: The ReactComponent class that will be rendered
    .run(function (Handler) {
      React.render(<Handler/>, document.body);
    });

})();
