import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

export default function PostItem({post, deletePost}) {
  return (
    <Table.Row>
      <Table.Cell>{post._id}</Table.Cell>
      <Table.Cell>{post.title}</Table.Cell>
      <Table.Cell>
        <Button icon color="green" as={Link} to={`/posts/edit/${post._id}`}>
          <Icon name="edit" />
        </Button>
        <Button icon color="red" onClick={() => deletePost(post._id)} >
          <Icon name="trash" />
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}