/* @flow */

import test from 'tape';
import localStorage from 'localstorage-memory';



test('localStorage', (t) => {
  localStorage.setItem('testItem', JSON.stringify({a: 1}));
  t.deepEqual(JSON.parse(localStorage.getItem('testItem')), {a: 1}, 'Setting an item and getting it from localStorage must be equal.');
  t.end();
});
