import { client } from './';

const url = '/posts';

export function fetchPosts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_POSTS',
      payload: client.get(url)
    })
  }
}

export function newPost() {
  return dispatch => {
    dispatch({
      type: 'NEW_POST'
    })
  }
}

export function savePost(post) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_POST',
      payload: client.post(url, post)
    })
  }
}

export function fetchPost(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_POST',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updatePost(post) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_POST',
      payload: client.put(`${url}/${post._id}`, post)
    })
  }
}

export function deletePost(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_POST',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}