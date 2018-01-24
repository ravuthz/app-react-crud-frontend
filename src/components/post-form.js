import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {};
  if(!values.title) {
    errors.title = {
      message: 'You need to provide Title'
    }
  }
  if(!values.content) {
    errors.content = {
      message: 'You need to provide Content'
    }
  }
  return errors;
}

class PostForm extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { post } = nextProps;
    if(post._id !== this.props.post._id) {
      this.props.initialize(post)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{this.props.post._id ? 'Edit Post' : 'Add New Post'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="title" type="text" component={this.renderField} label="Title"/>
            <Field name="content" type="text" component={this.renderField} label="Content"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'post', validate})(PostForm);