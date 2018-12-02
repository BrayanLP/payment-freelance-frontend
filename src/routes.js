import pathToRegexp from 'path-to-regexp'; 
export default {
  home: '/',
  project: '/proyecto',
  projectCreate: '/proyecto/crear',
  projectEdit: '/proyecto/:id/edit',
  compile: (path, keys) => pathToRegexp.compile(path)(keys)
};
