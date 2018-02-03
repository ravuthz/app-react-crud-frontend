import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

class SideBar extends Component {
  render() {
    const { visible } = this.props
    return (
      <Sidebar.Pushable as={Segment} style={{ marginTop: '56px', border: 'none' }}>
        <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Menu.Item name='dashboard' as={Link} to="/">
            <Icon name='dashboard' />
            Dashboard
          </Menu.Item>
          <Menu.Item name='posts' as={Link} to="/posts">
            <Icon name='edit' />
            Posts
          </Menu.Item>
          <Menu.Item name='contacts' as={Link} to="/contacts">
            <Icon name='id card outline' />
            Contacts
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic style={{ minHeight: '100vh' }} clearing>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default SideBar