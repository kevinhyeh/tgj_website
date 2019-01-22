const address = 'localhost:3001';

export const _loadProjects = () => {
  return fetch('http://' + address + '/projects', {
    method: 'POST'
  }).then(res => res.json())
}