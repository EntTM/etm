/* @flow */

import {getAllProjects} from './server';


/* Actions */

export var LOGIN_ACTION = 'LOGIN_ACTION';
export var FETCH_ALL_PROJECTS_ACTION = 'FETCH_ALL_PROJECTS_ACTION';



/* Action type */

export type Action = Object;

type Thunk = (dispatch: ((action: Action) => void), getState?: () => Object) => void;



/* Action creators */

export function createLoginAction(username: string, password: string): Thunk {
  localStorage.setItem('username', username);
  localStorage.setItem('password',  password);

  return dispatch => {
    getAllProjects()
      .then(projects => {
        dispatch({type: LOGIN_ACTION, username, password});
        dispatch({type: FETCH_ALL_PROJECTS_ACTION, projects});
      })
      .catch(error => dispatch({type: LOGIN_ACTION, error}));
  };
}
