import React from 'react'
import { Container, Dropdown, Image, Icon, Menu } from 'semantic-ui-react'

const MenuBar = ({ visible, clickToggleSideBar }) => (
  <Menu fixed='top' inverted>
    <Container fluid>
      <Menu.Item as='a' header>
        <Image
          size='mini'
          src='/logo.png'
          style={{ marginRight: '1.5em' }}
        />
        React Admin Crud
      </Menu.Item>
      
      <Menu.Item onClick={ clickToggleSideBar }>
        <Icon name={ visible ? 'triangle left' : 'triangle right' } />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Dropdown item simple text='Account'>
          <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
            <Icon name="power" />
            Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
      
    </Container>
  </Menu>
)

export default MenuBar