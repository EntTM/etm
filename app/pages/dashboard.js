/* @flow */

import React from 'react';
import rd3 from 'react-d3-components';
import {
  Avatar,
  Card,
  CardActions,
  CardExpandable,
  CardHeader,
  CardText,
  CardTitle,
  CircularProgress,
  FloatingActionButton,
  FontIcon,
  RaisedButton,
  Styles,
  Tab,
  Tabs
} from 'material-ui';



var ThemeManager = new Styles.ThemeManager();
var Colors = Styles.Colors;

class Dashboard extends React.Component {

  constructor(props: Object) {
    super(props)
    this.state = {isExpanded: false}
    this._handleFabTouch = this._handleFabTouch.bind(this)
  }

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount(): void {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  }

  getStyles(): Object {
    return {
      containerStyle: {
        textAlign: 'right'
      },
      fabStyle: {
        position: 'fixed',
        right: '15px',
        bottom: '24px',
        zIndex: '999',
        direction: 'ltr',
        transition: 'transform 0.2s',
        transitionTimingFunction: 'ease-in'
      },
      filterFabsStyle: {
        position: 'fixed',
        right: '22px',
        bottom: '32px',
        zIndex: '990',
        direction: 'ltr',
        transition: 'bottom 0.2s',
        transitionTimingFunction: 'ease-in',
      },
      progressStyle: {
        display: 'inline-flex',
        flex: '1',
        alignItems: 'center'
      }
    };
  }

  _handleFabTouch(): void {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  _filterPastTasks(): void {
    console.log('Filter projects and show just past Projects');
  }

  _filterCurrentTasks(): void {
    console.log('Filter projects and show just current Projects');
  }

  _filterFutureTasks(): void {
    console.log('Filter projects and show just future Projects');
  }

  render(): React.Element {
    var styles = this.getStyles();

    var avatar = (
      <FontIcon className="material-icons" style={{direction: 'ltr'}}>work</FontIcon>
    );

    var BarChart = rd3.BarChart;
    var AreaChart = rd3.AreaChart;
    var PieChart = rd3.PieChart;

    var barData = [{
      label: 'somethingA',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];
    var areaData = [
      {
        label: 'somethingA',
        values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
      }
    ];


    var rotate45 = {transform: 'rotate(45deg)'};
    return (
      <div style={styles.containerStyle}>
        <FloatingActionButton
          onTouchTap={this._handleFabTouch}
          ref="fab"
          style={Object.assign({}, styles.fabStyle, this.state.isExpanded && rotate45)} >
          <FontIcon className="material-icons" ref="fabIcon">add</FontIcon>
        </FloatingActionButton>
        <div>
          <FloatingActionButton
            mini={true}
            onTouchTap={this._filterCurrentTasks}
            style={Object.assign({}, styles.filterFabsStyle, this.state.isExpanded && {bottom: '100px'})} >
            <FontIcon className="material-icons" ref="fabIcon">play_arrow</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            onTouchTap={this._filterPastTasks}
            style={Object.assign({}, styles.filterFabsStyle, this.state.isExpanded && {bottom: '150px'})} >
            <FontIcon className="material-icons" ref="fabIcon">done</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton
            mini={true}
            onTouchTap={this._filterFutureTasks}
            style={Object.assign({}, styles.filterFabsStyle, this.state.isExpanded && {bottom: '200px'})} >
            <FontIcon className="material-icons" ref="fabIcon">trending_up</FontIcon>
          </FloatingActionButton>
        </div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            title="پروژه‌ی ایکس" />

          <CardText expandable={true} style={{padding: '0', margin: '0'}}>
            <div style={{display: 'block', textAlign: 'center', backgroundColor: Colors.red500}}>
              <h5 style={styles.progressStyle}>زمان پروژه
                <CircularProgress
                  mode="determinate"
                  style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                  value={60} />
              </h5>
              <h5 style={styles.progressStyle}>وضعیت پروژه
                <CircularProgress
                  mode="determinate"
                  style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                  value={40} />
              </h5>
            </div>
            <Tabs style={{direction:'ltr'}}>
              <Tab label="پیشرفت پروژه">
                <AreaChart
                  data={areaData}
                  height={400}
                  margin={{top: 10, bottom: 50, left: 30, right: 40}}
                  width={window.innerWidth}/>
              </Tab>
              <Tab label="نمودار میله‌ای">
                <BarChart
                  data={barData}
                  height={400}
                  margin={{top: 10, bottom: 50, left: 30, right: 40}}
                  width={window.innerWidth}/>
              </Tab>
            </Tabs>
          </CardText>
        </Card>

        <div style={{height:'5px'}}></div>

        <Card initiallyExpanded={true}>
          <CardHeader
            avatar={avatar}
            showExpandableButton={true}
            style={{paddingRight: '40px'}}
            title="پروژه‌ی شرکت دبلیو" />

          <CardText expandable={true} style={{padding: '0', margin: '0'}}>
            <div style={{display: 'block', textAlign: 'center', backgroundColor: Colors.yellow500}}>
              <h5 style={styles.progressStyle}>زمان پروژه
                <CircularProgress
                  mode="determinate"
                  style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                  value={52} />
              </h5>
              <h5 style={styles.progressStyle}>وضعیت پروژه
                <CircularProgress
                  mode="determinate"
                  style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                  value={45} />
              </h5>
            </div>
            <Tabs style={{direction:'ltr'}}>
              <Tab label="پیشرفت پروژه">
                <AreaChart
                  data={areaData}
                  height={400}
                  margin={{top: 10, bottom: 50, left: 30, right: 40}}
                  width={window.innerWidth}/>
              </Tab>
              <Tab label="نمودار میله‌ای">
                <BarChart
                  data={barData}
                  height={400}
                  margin={{top: 10, bottom: 50, left: 30, right: 40}}
                  width={window.innerWidth}/>
              </Tab>
            </Tabs>
          </CardText>
        </Card>

        <div style={{height:'5px'}}></div>

          <Card initiallyExpanded={true}>
            <CardHeader
              avatar={avatar}
              showExpandableButton={true}
              style={{paddingRight: '40px'}}
              title="پروژه‌ی شرکت زد" />

            <CardText expandable={true} style={{padding: '0', margin: '0'}}>
              <div style={{display: 'block', textAlign: 'center', backgroundColor: Colors.green500}}>
                <h5 style={styles.progressStyle}>زمان پروژه
                  <CircularProgress
                    mode="determinate"
                    style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                    value={62} />
                </h5>
                <h5 style={styles.progressStyle}>وضعیت پروژه
                  <CircularProgress
                    mode="determinate"
                    style={{verticalAlign: 'middle', transform: 'rotate(-90deg)', marginRight: '15px'}}
                    value={70} />
                </h5>
              </div>
              <Tabs style={{direction:'ltr'}}>
                <Tab label="پیشرفت پروژه">
                  <AreaChart
                    data={areaData}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 30, right: 40}}
                    width={window.innerWidth}/>
                </Tab>
                <Tab label="نمودار میله‌ای">
                  <BarChart
                    data={barData}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 30, right: 40}}
                    width={window.innerWidth}/>
                </Tab>
              </Tabs>
            </CardText>
          </Card>

      </div>
    );
  }

}

Dashboard.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Dashboard;
