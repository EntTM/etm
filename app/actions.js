/* @flow */


/* Actions */

export var LOGIN_ACTION = 'LOGIN_ACTION';



/* Action type */

export type Action =
  {type: 'LOGIN_ACTION', username: string, password: string} |
  {type: 'other things'};

type Thunk = (dispatch: ((action: Action) => void), getState?: () => Object) => void;



/* Action creators */

export function createLoginAction(username: string, password: string): Thunk {
  var action = {
    type: LOGIN_ACTION,
    username, password
  };

  return dispatch => {
    setTimeout(()=>dispatch(action), 1500)
  };
}
