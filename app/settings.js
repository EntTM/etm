/* @flow */



async function getUsername(): Promise<string> {return 'johndoe';}
async function getPassword(): Promise<string> {return 'password';}
async function getBaseUrl(): Promise<string> {return 'http://www.example.com';}
async function getTaskListUrl(): Promise<string> {return '/all/tasks';}
async function getProjectListUrl(): Promise<string> {return '/all/projects';}


export default {
  getUsername,
  getPassword,
  getBaseUrl,
  getTaskListUrl,
  getProjectListUrl
};
