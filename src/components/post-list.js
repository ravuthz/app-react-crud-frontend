import React from 'react';
import Pager from './pager';
import PostItem from './post-item';
import { Table } from 'semantic-ui-react';

export default function PostList({posts, pager, deletePost, onPageChange}){
  const items = () => {
    return posts.map(post => {
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
            <Pager pager={pager} onPageChange={onPageChange} />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
} 