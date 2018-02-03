import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { Segment, Grid } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import ContactForm from './contact-form';
import { newContact, saveContact, fetchContact, updateContact } from './contact-actions';

class ContactFormPage extends Component {
  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchContact(_id)
    } else {
      this.props.newContact();
    }
  }
  
  submit = (contact) => {
    if(!contact._id) {
      return this.props.saveContact(contact)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateContact(contact)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    const { contact, loading } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column  mobile={16} widescreen={16} largeScreen={10}>
            <Segment raised>
              {
                this.state.redirect ?
                <Redirect to="/" /> :
                <ContactForm contact={contact} loading={loading} onSubmit={this.submit} />
              }
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, 
  {newContact, saveContact, fetchContact, updateContact})(ContactFormPage);