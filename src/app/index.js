import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import MenuBar from '../shared/menu-bar';
import SideBar from '../shared/side-bar';

import PostFormPage from '../post/post-form-page';
import PostListPage from '../post/post-list-page';
import ContactFormPage from '../contact/contact-form-page';
import ContactListPage from '../contact/contact-list-page';
import DashboardPage from '../dashboard/dashboard-page';

class App extends Component {
  state = {
    visible: true,
  }
  
  toggleSideBar = () => {
    this.setState({ 
      visible: !this.state.visible
    })
  }

  render() {
    const { visible } = this.state;
    return (
      <Container fluid>
        <MenuBar visible={ visible } clickToggleSideBar={this.toggleSideBar} />
        <SideBar visible={ visible }>
          <Route exact path="/" component={DashboardPage}/>
          <Route exact path="/posts" component={PostListPage}/>
          <Route exact path="/posts/new" component={PostFormPage}/>
          <Route exact path="/posts/edit/:_id" component={PostFormPage}/>
          <Route exact path="/contacts" component={ContactListPage}/>
          <Route exact path="/contacts/new" component={ContactFormPage}/>
          <Route exact path="/contacts/edit/:_id" component={ContactFormPage}/>
        </SideBar>
      </Container>
    );
  }
}

export default App;