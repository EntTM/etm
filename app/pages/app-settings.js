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

        <ListDivider/>

        <List
          subheader='تنظیمات دیگر'
          subheaderStyle={{marginRight: '16px'}}
        >
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="اعلان‌ها"
            secondaryText="فعالسازی اعلان‌ها" />
        </List>

        <ListDivider/>

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

export default AppSettings;
