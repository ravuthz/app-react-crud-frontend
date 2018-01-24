import React, { Component} from 'react';
import { connect } from 'react-redux';
import PostList from '../components/post-list';
import { fetchPosts, deletePost } from '../actions/post-actions';

class PostListPage extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>List of Posts</h1>
        <PostList 
          posts={this.props.posts} 
          deletePost={this.props.deletePost}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts : state.postStore.posts
  }
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(PostListPage);