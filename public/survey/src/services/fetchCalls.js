const address = 'localhost:3001';

export const _loadProjects = () => {
  return fetch('http://' + address + '/projects', {
    method: 'POST'
  }).then(res => res.json())
}

export const _emailClient = () => {
  return fetch('http://' + address + '/test', {
    method: 'GET'
  }).then(res => console.log(res.json))
}

// export const _emailClient = (survey, err) => {
//   return fetch('https://' + address + '/email', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       survey: survey
//     })
//   }).then(res => res.json())
// }