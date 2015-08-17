/* @flow */

import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  FontIcon,
  RaisedButton
} from 'material-ui';



class Task extends React.Component {
  render(): React.Element {
    var {title, subtitle, remaining, details} = this.props.task;

    var avatar = (
      <FontIcon
        className="material-icons"
        style={{direction: 'ltr', fontSize: '40px'}}
      >
        assignment
      </FontIcon>
    );

    return (
      <Card initiallyExpanded={true} style={{marginBottom: '10px'}}>
        <CardHeader
          avatar={avatar}
          showExpandableButton={true}
          style={{paddingRight: '40px'}}
          subtitle={subtitle}
          title={title}/>

        <CardText expandable={true}>
          <h3>انجام شده در زمان: {remaining}</h3>
          <h3>توضیحات:</h3>
          <p>{details}</p>
        </CardText>

        <CardActions expandable={true}>
          <RaisedButton
            label="اتمام کار"
            onTouchTap={this.props.onJobFinish}/>
        </CardActions>
      </Card>
    );
  }
}

Task.propTypes = {
  onJobFinish: React.PropTypes.func,
  task: React.PropTypes.object
};

export default Task;
