/* @flow */

import {getAllTasks, getAllProjects} from './server';
import router from './router';


/* Actions */

export var LOGIN_ACTION = 'LOGIN_ACTION';
export var LOADING_ACTION = 'LOADING_ACTION';
export var FETCH_ALL_DATA_ACTION = 'FETCH_ALL_DATA_ACTION';
export var GOTO_SETTINGS_ACTION = 'GOTO_SETTINGS_ACTION';
export var SELECT_PROJECT_ACTION = 'SELECT_PROJECT_ACTION';



/* Action type */

export type Action = Object;

type Thunk = (dispatch: ((action: Action) => void), getState?: () => Object) => void;



/* Action creators */

export function loginAction(username: string, password: string): Thunk {
  localStorage.setItem('username', username);
  localStorage.setItem('password',  password);

  return dispatch => {
    Promise.all([getAllTasks(), getAllProjects()])
      .then(([tasks, projects]) => {
        localStorage.setItem('loggedIn', 'true');
        dispatch({type: LOGIN_ACTION, username, password});
        dispatch({type: FETCH_ALL_DATA_ACTION, tasks, projects});
        router.transitionTo('activities');
      })
      .catch(error => dispatch({type: LOGIN_ACTION, error}))
      .then(r => dispatch(loadingAction(false)));
  };
}


export function loadingAction(loading: bool): Action {
  return {
    type: LOADING_ACTION,
    loading
  };
}

export function gotoSettingsAction(): Action {
  router.transitionTo('settings');
  return {
    type: GOTO_SETTINGS_ACTION
  };
}

export function selectProjectAction(projId: string|number): Action {
  return {
    type: SELECT_PROJECT_ACTION,
    projId
  };
}
