import { client } from '../app/action';

const url = '/posts';

export function fetchPosts(page = 1, size = 5, sort = 'id,desc') {
  return dispatch => {
    return dispatch({
      type: 'FETCH_POSTS',
      payload: client.get(`${url}?$skip=${page-1}&$limit=${size}&$sort=${sort}`)
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
