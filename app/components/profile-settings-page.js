/* @flow */

import React from 'react';
import {
  MenuItem,
  List,
  ListDivider,
  ListItem,
  Styles
} from 'material-ui';

var Colors = Styles.Colors;

class ProfileSettings extends React.Component {

  constructor() {
    super();
  }

  render() : React.Element {
    return (
      <div>
        <List subheader={<div style={{paddingRight:'16px'}}>تنظیمات عمومی</div>}>
          <ListItem
            primaryText="نام و نام خانوادگی"
            secondaryText="حسین نیکپور" />

          <ListItem
            primaryText="نام کاربری"
            secondaryText="HosseinNikpour" />

          <ListItem
            primaryText="رمز عبور" />

          <ListItem
            primaryText="تصویر پروفایل" />
        </List>

        <ListDivider />

        <List subheader={<div style={{paddingRight:'16px'}}>تنظیمات دیگر</div>}>
          <ListItem
            primaryText="لغو اشتراک برنامه"
            secondaryText="تمام داده‌ها پاک خواهد شد" />
        </List>
      </div>
    );
  }

}

export default ProfileSettings;
