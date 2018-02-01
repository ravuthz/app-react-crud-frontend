import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
import PostListPage from './pages/post-list-page';
import PostFormPage from './pages/post-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui four item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">
            Add Contact
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/posts">
            Posts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/posts/new">
            Add Post
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        
        <Route path="/contacts" component={ContactFormPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
        
        <Route exact path="/posts" component={PostListPage}/>
        <Route exact path="/posts/new" component={PostFormPage}/>
        <Route exact path="/posts/edit/:_id" component={PostFormPage}/>
      </Container>
    );
  }
}

export default App;