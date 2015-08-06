/* @flow */


/* Actions */

export var TEST_ACTION = 'TEST_ACTION';



/* Action type */

export type Action =
  {type: 'TEST_ACTION', text: string} |
  {type: 'other things'};



/* Action creators */

export function createTestAction(text: string): Action {
  return {
    type: TEST_ACTION,
    text
  };
}
