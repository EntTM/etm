/* @flow */

import Settings from './settings';



function serverCall(url, config) {
  var {username, password, baseUrl} = config;
  var hash = btoa(`${username}:${password}`);
  var Authorization = `Basic ${hash}`;
  var Accept = 'application/json; odata=verbose';

  return fetch(baseUrl + url, {
    method: 'get',
    headers: {Authorization, Accept}
  }).then(response => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
  }).then(r => r.json());
}

async function getConfig() {
  var username = await Settings.getUsername()
    , password = await Settings.getPassword()
    , baseUrl  = await Settings.getBaseUrl();

  return {username, password, baseUrl};
}

export async function getAllTasks(): Promise<Object> {
  var result = await serverCall(await Settings.getTaskListUrl(), await getConfig());
  return result.d.results.map(task => {
    var {Id, Title, ...rest} = task;
    return {Id, Title, rest};
  });
}

export async function getAllProjects(): Promise<Object> {
  var result = await serverCall(await Settings.getProjectListUrl(), await getConfig());
  return result.d.results.map(project => {
    var {Id, Title, ...rest} = project;
    return {Id, Title, rest};
  });
}
