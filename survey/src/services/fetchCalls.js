const address = 'localhost:3001';

export const _loadProjects = () => {
  return fetch('http://' + address + '/projects', {
    method: 'POST'
  }).then(res => res.json())
}

export const _emailClient = (survey) => {
  return fetch('http://' + address + '/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      survey: survey
    })
  }).then(res => res.json())
}