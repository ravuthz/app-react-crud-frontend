import React from 'react';
import PostItem from './post-item';
import { Table, Menu, Icon } from 'semantic-ui-react';

export default function PostList({posts, deletePost}){

  const items = () => {
    return posts.map(post => {
    console.log("PostList post", post);
      return (
        <PostItem 
          key={post._id} 
          post={post} 
          deletePost={deletePost}
          />
      )
    })
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        { items() }
      </Table.Body>
  
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='left chevron' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='right chevron' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}