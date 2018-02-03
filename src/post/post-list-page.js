import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PostList from './post-list';
import { fetchPosts, deletePost } from './post-actions';

class PostListPage extends Component {
  componentDidMount() {
    this.props.fetchPosts(1);
  }
  
  onPageChange = (event, { activePage }) => {
    this.props.fetchPosts(activePage);
  }
  
  render() {
    return (
      <Segment raised loading={this.props.loading}>
        <Header as="h2">List of Posts</Header>
        <Link to='/posts/new' className="ui basic button green">
          <Icon name="edit"/>
          New
        </Link>
        <PostList
          posts={this.props.posts}
          pager={this.props.pager}
          deletePost={this.props.deletePost}
          onPageChange={this.onPageChange}
          />
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  // const { posts, pager, loading } = state.postStore;
  // return { posts, pager, loading };
  return state.postStore;
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(PostListPage);