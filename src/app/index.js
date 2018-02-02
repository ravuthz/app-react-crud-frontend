import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import PostFormPage from '../post/post-form-page';
import PostListPage from '../post/post-list-page';
import ContactFormPage from '../contact/contact-form-page';
import ContactListPage from '../contact/contact-list-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui five item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Home
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/posts">
            Posts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/posts/new">
            Add Post
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">
            Add Contact
          </NavLink>
        </div>
        <Route exact path="/" component={PostListPage}/>
        <Route exact path="/posts" component={PostListPage}/>
        <Route exact path="/posts/new" component={PostFormPage}/>
        <Route exact path="/posts/edit/:_id" component={PostFormPage}/>
        <Route exact path="/contacts" component={ContactListPage}/>
        <Route exact path="/contacts/new" component={ContactFormPage}/>
        <Route exact path="/contacts/edit/:_id" component={ContactFormPage}/>
      </Container>
    );
  }
}

export default App;