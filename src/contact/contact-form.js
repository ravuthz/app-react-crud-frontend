import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {
    name:{}
  };
  if(!values.name || !values.name.first) {
    errors.name.first = {
      message: 'You need to provide First Name'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'Phone number must be in International format'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors;
}

class ContactForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
    const { contact } = nextProps;
    if(contact._id !== this.props.contact._id) { // Initialize form only once
      this.props.initialize(contact)
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
    const { handleSubmit, pristine, submitting, loading, contact } = this.props;
    return (
       <div>
        <Header as="h2">{ contact._id ? 'Edit Contact' : 'New Contact' }</Header>
        <Divider clearing />
        <Form onSubmit={handleSubmit} loading={loading}>
          <Form.Group widths='equal'>
            <Field name="name.first" type="text" component={this.renderField} label="First Name"/>
            <Field name="name.last" type="text" component={this.renderField} label="Last Name"/>
          </Form.Group>
          <Field name="phone" type="text" component={this.renderField} label="Phone"/>
          <Field name="email" type="text" component={this.renderField} label="Email"/>
          <Button primary type='submit' disabled={pristine || submitting}>Submit</Button>
          <Link to='/contacts' className="ui basic button">
            Cancel
          </Link>
        </Form>
      </div>
    )
  }
}

export default reduxForm({form: 'contact', validate})(ContactForm);