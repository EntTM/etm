/* @flow */

import React from 'react';
import {RouteHandler} from 'react-router';
import MainAppBar from '../components/main-app-bar';



class UI extends React.Component {
  render(): React.Element {
    return (
      <div>
        <MainAppBar menu={this.props.menu} title={this.props.title}/>

        <RouteHandler/>
      </div>
    );
  }
}

UI.propTypes = {
  menu: React.PropTypes.func,
  title: React.PropTypes.string
};


export default UI;
