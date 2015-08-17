/* @flow */


/* Actions */

export var LOGIN_ACTION = 'LOGIN_ACTION';



/* Action type */

export type Action =
  {type: 'LOGIN_ACTION', username: string, password: string} |
  {type: 'other things'};



/* Action creators */

export function createLoginAction(username: string, password: string): Action {
  return {
    type: LOGIN_ACTION,
    username, password
  };
}
