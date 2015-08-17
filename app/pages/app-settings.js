/* @flow */

import React from 'react';
import {
  Checkbox,
  List,
  ListDivider,
  ListItem
} from 'material-ui';



class AppSettings extends React.Component {
  render(): React.Element {
    return (
      <div>
        <List
          subheader='تنظیمات عمومی'
          subheaderStyle={{marginRight: '16px'}}
        >
          <ListItem
            primaryText="تم برنامه"
            secondaryText="تغییر تم کنونی" />
        </List>

        <ListDivider />

        <List
          subheader='تنظیمات دیگر'
          subheaderStyle={{marginRight: '16px'}}
        >
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
