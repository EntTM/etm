let React = require('react');
let {MenuItem, List, ListDivider, ListItem, Styles} = require('material-ui');

let Colors = Styles.Colors;

class ListsPage extends React.Component {

  constructor() {
    super();
  }

  render() {

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

module.exports = ListsPage;
