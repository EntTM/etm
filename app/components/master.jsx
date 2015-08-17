let React = require('react');
let Router = require('react-router');
let AppLeftNav = require('./app-left-nav.jsx');
let { AppBar, AppCanvas, Menu, Styles } = require('material-ui');

let RouteHandler = Router.RouteHandler;
let Colors = Styles.Colors;
let ThemeManager = new Styles.ThemeManager();


class Master extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getStyles() {
    let darkWhite = Colors.darkWhite;
    return {
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: '0',
        color: Colors.lightWhite,
        maxWidth: '335px'
      },
      iconButton: {
        color: darkWhite
      },
      containerStyle: {
        paddingTop: '64px',
        direction: 'rtl'
      }
    };
  }

  render() {
    let styles = this.getStyles();
    let title =
      this.context.router.isActive('current-activities') ? 'فعالیت‌های جاری' :
      this.context.router.isActive('all-activities') ? 'همه‌ی فعالیت‌ها' :
      this.context.router.isActive('dashboard') ? 'داشبورد' :
      this.context.router.isActive('profile-settings') ? 'تنظیمات پروفایل' :
      this.context.router.isActive('app-settings') ? 'تنظیمات' : 'ثبت نام'

    return (
      <AppCanvas>

        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0} />

        <AppLeftNav ref="leftNav" />
        <div style={styles.containerStyle}>
          <RouteHandler />
        </div>

      </AppCanvas>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }
}

Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;
