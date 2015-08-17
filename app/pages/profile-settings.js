/* @flow */

import React from 'react';
import {List, ListDivider, ListItem} from 'material-ui';



class ProfileSettings extends React.Component {
  render(): React.Element {
    return (
      <div>
        <List
          subheader='تنظیمات عمومی'
          subheaderStyle={{marginRight: '16px'}}
        >
          <ListItem
            primaryText="نام و نام خانوادگی"
            secondaryText="حسین نیکپور"
          />

          <ListItem
            primaryText="نام کاربری"
            secondaryText="HosseinNikpour"
          />

          <ListItem primaryText="رمز عبور"/>

          <ListItem primaryText="تصویر پروفایل"/>
        </List>

        <ListDivider/>

        <List
          subheader='تنظیمات دیگر'
          subheaderStyle={{marginRight: '16px'}}
        >
          <ListItem
            primaryText="لغو اشتراک برنامه"
            secondaryText="تمام داده‌ها پاک خواهد شد"/>
        </List>
      </div>
    );
  }
}


export default ProfileSettings;
