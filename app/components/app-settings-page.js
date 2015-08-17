let React = require('react');
let {MenuItem, Checkbox, List, ListDivider, ListItem, Styles} = require('material-ui');

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

module.exports = ListsPage;
