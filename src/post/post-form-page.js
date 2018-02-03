import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { Segment, Grid } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PostForm from './post-form';
import { newPost, savePost, fetchPost, updatePost } from './post-actions';

class PostFormPage extends Component {
  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchPost(_id)
    } else {
      this.props.newPost();
    }
  }
  
  submit = (post) => {
    if(!post._id) {
      return this.props.savePost(post)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updatePost(post)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column  mobile={16} widescreen={16} largeScreen={10}>
            <Segment raised>
              {
                this.state.redirect ?
                <Redirect to="/posts" /> :
                <PostForm post={this.props.post} loading={this.props.loading} onSubmit={this.submit} />
              }
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return state.postStore
  // return {
  //   post: state.postStore.post,
  //   errors: state.postStore.errors
  // }
}

export default connect(mapStateToProps, 
  {newPost, savePost, fetchPost, updatePost})(PostFormPage);