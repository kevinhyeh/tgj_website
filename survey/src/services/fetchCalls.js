const address = '165.22.152.209:3001';

export const _loadProjects = () => {
  return fetch('http://' + address + '/projects', {
    method: 'POST'
  }).then(res => res.json())
}

export const _emailClient = (survey) => {
  return fetch('https://' + address + '/email', {
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