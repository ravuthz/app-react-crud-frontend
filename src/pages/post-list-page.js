import React, { Component} from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PostList from '../components/post-list';
import { fetchPosts, deletePost, fetchPostsByPage } from '../actions/post-actions';

class PostListPage extends Component {
  componentDidMount() {
    this.props.fetchPostsByPage(1);
  }
  
  onPageChange = (event, { activePage }) => {
    this.props.fetchPostsByPage(activePage);
  }
  
  render() {
    return (
      <div>
        <h1>List of Posts</h1>
        <Dimmer active={this.props.loading}>
          <Loader size='huge'>Loading</Loader>
        </Dimmer>
        <PostList
          posts={this.props.posts}
          pager={this.props.pager}
          deletePost={this.props.deletePost}
          onPageChange={this.onPageChange}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // const { posts, pager, loading } = state.postStore;
  // return { posts, pager, loading };
  return state.postStore;
}

export default connect(mapStateToProps, {fetchPosts, deletePost, fetchPostsByPage})(PostListPage);