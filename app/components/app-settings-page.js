/* @flow */

import React from 'react';
import {
  MenuItem,
  Checkbox,
  List,
  ListDivider,
  ListItem,
  Styles
} from 'material-ui';

var Colors = Styles.Colors;

class AppSettings extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <List subheader={<div style={{paddingRight:'16px'}}>تنظیمات عمومی</div>}>
          <ListItem
            primaryText="تم برنامه"
            secondaryText="تغییر تم کنونی" />
        </List>

        <ListDivider />

        <List subheader={<div style={{paddingRight:'16px'}}>تنظیمات دیگر</div>}>
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="اعلان‌ها"
            secondaryText="فعالسازی اعلان‌ها" />
        </List>
      </div>
    );
  }

}

export default AppSettings;
