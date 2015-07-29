/* @flow */

import React from 'react';
import Hello from './component';
import injectTapEventPlugin from 'react-tap-event-plugin';




injectTapEventPlugin();

function main() {
  React.render(<Hello />, document.getElementById('app'));
}

main();
