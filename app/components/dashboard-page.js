let React = require('react');
let {CircularProgress, Styles} = require('material-ui');

let ThemeManager = new Styles.ThemeManager();
let Colors = Styles.Colors;

let DashboardPage = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '50px'
    };

    return (
      <div style={containerStyle}>
        <h1>Enterprise Task Manager</h1>
        <h2>Dashboard</h2>
        <CircularProgress mode="indeterminate"  />
      </div>
    );
  },

});

module.exports = DashboardPage;
