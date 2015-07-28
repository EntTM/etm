/* @flow */

import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

export default createComponent;

function createComponent(
  component: React.Element,
  props: Object,
  ...children: Array<React.Element>): React.Component {
  var shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return shallowRenderer.getRenderOutput();
}
