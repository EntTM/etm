/* @flow */

import type {Action} from './actions';
import {TEST_ACTION} from './actions';



export function test(state: any = {text: 'Hello World'}, action: Action): any {
  switch(action.type){
    case TEST_ACTION:
      return {...state, text: action.text};
    default:
      return state;
  }
}
