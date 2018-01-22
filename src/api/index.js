// for local server rails api:
const baseUrl = 'http://localhost:3000'

// for hosted heroku api:
//const baseUrl = 'https://rotten-average-api.herokuapp.com'


export function getPosts() {
  return fetch(`${baseUrl}/posts`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'GET',
  }).then( response => response.json() )
}

export function createPost( postObject ) {
  return fetch(`${baseUrl}/posts`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      username: postObject.username,
      content: postObject.content, /////neeeed to change this !!!!
    })
  }).then( res => res.json() )
}
