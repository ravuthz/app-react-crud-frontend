import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Divider, Icon, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ContactList from './contact-list';
import { fetchContacts, deleteContact } from './contact-actions';

class ContactListPage extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column  mobile={16} widescreen={16} largeScreen={10}>
            <Segment raised loading={this.props.loading} size="mini">
              <Header as="h2">List of Contacts</Header>
              <Link to='/contacts/new' className="ui basic button green">
                <Icon name="user plus"/>
                New
              </Link>
              <Divider clearing />
              <ContactList 
                contacts={this.props.contacts} 
                deleteContact={this.props.deleteContact}
                />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts
  }
}

export default connect(mapStateToProps, {fetchContacts, deleteContact})(ContactListPage);