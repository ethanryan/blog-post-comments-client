// for local server rails api:
const baseUrl = 'http://localhost:3000'

// for hosted heroku api:
//const baseUrl = 'https://blog-post-comments-api.herokuapp.com'

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

export function getComments() {
  return fetch(`${baseUrl}/comments`, {
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
      content: postObject.content,
    })
  }).then( res => res.json() )
}

export function createComment( commentObject ) {
  return fetch(`${baseUrl}/comments`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      username: commentObject.username,
      content: commentObject.content,
      post_id: commentObject.post_id,
    })
  }).then( res => res.json() )
}

export function updateComment( commentObject ) {
  return fetch(`${baseUrl}/comments/${commentObject.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    mode: 'cors',
    method: 'PATCH',
    body: JSON.stringify({
      username: commentObject.username,
      content: commentObject.content,
      post_id: commentObject.post_id,
    })
  }).then( res => res.json() )
}

export function deleteComment(id) {
  return fetch(`${baseUrl}/comments/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    }
  }).then( res => res.json() )
}
