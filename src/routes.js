import pathToRegexp from 'path-to-regexp'; 
export default {
  home: '/',
  project: '/proyecto',
  createProject: '/proyecto/crear',
  editProject: '/proyecto/:id/edit',
  compile: (path, keys) => pathToRegexp.compile(path)(keys)
};
