/* @-flow */

import test from 'tape';
import createComponent from './create-component';
import Hello from '../app/component';
import {Dialog, RaisedButton} from 'material-ui';



test("Hello component", (t) => {
  var result = createComponent(Hello, {});

  t.equal(result.type, 'div', 'Should be a div.');
  t.deepEqual(result.props.style,
              {textAlign: 'center', paddingTop: '200px'},
              'Should have the right style.');

  t.test('Children', (tt) => {
    var children = result.props.children;

    tt.equal(children.length, 4, 'Should have 4 childs.');
    tt.equal(children[0].type, Dialog, 'First child should be a dialog.');
    tt.equal(children[1].type, 'h1', 'Second child should be a h1.');
    tt.equal(children[2].type, 'h2', 'Third child should be a h2.');
    tt.equal(children[3].type, RaisedButton, 'Fourth child should be a raised button.');

    tt.end();
  });

  t.end();
});
