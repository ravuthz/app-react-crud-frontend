const defaultState = {
  posts: [],
  post: {},
  pager: {},
  loading: false,
  errors: {}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_POSTS': {
      return {
        ...state,
        posts: action.payload
      }
    }
    case 'FETCH_POSTS_PENDING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'FETCH_POSTS_FULFILLED': {
      return {
        ...state,
        posts: action.payload.data.data,
        pager: action.payload.data.pager,
        loading: false
      }
    }
    case 'NEW_POST': {
      return {
        ...state,
        post: defaultState.post
      }
    }
    case 'SAVE_POST_PENDING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'SAVE_POST_FULFILLED': {
      return {
        ...state,
        posts: [...state.posts, action.payload.data],
        errors: {},
        loading: false
      }
    }
    case 'SAVE_POST_REJECTED': {
      const data = action.payload.response.data;
      const { title, content } = data.errors;
      const errors = { global: data.message, title, content };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }
    case 'FETCH_POST_PENDING': {
      return {
        ...state,
        loading: true,
        post: {}
      }
    }
    
    case 'FETCH_POST_FULFILLED': {
      return {
        ...state,
        post: action.payload.data,
        errors: {},
        loading: false
      }
    }
    
    case 'UPDATE_POST_PENDING': {
      return {
        ...state,
        loading: true
      }
    }
    
    case 'UPDATE_POST_FULFILLED': {
      const post = action.payload.data;
      return {
        ...state,
        posts: state.posts.map(item => item._id === post._id ? post : item),
        errors: {},
        loading: false
      }
    }
    
    case 'UPDATE_POST_REJECTED': {
      const data = action.payload.response.data;
      const { title, content } = data.errors;
      const errors = { global: data.message, title, content };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }
    case 'DELETE_POST_FULFILLED': {
      const _id = action.payload.data._id;
      return {
        ...state,
        posts: state.posts.filter(item => item._id !== _id)
      }
    }
    default:
      return state;
  }
}