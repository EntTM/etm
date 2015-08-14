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
  }).then(r => r.json());
}

async function getConfig() {
  var username = await Settings.getUsername()
    , password = await Settings.getPassword()
    , baseUrl  = await Settings.getBaseUrl();

  return {username, password, baseUrl};
}

export async function getAllTasks(): Promise<Object> {
  return serverCall(await Settings.getTaskListUrl(), await getConfig());
}

export async function getAllProjects(): Promise<Object> {
  return serverCall(await Settings.getProjectListUrl(), await getConfig());
}
