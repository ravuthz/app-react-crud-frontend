import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

export default function PostItem({post, deletePost}) {
  return (
    <Table.Row>
      <Table.Cell>{post._id}</Table.Cell>
      <Table.Cell>{post.title}</Table.Cell>
      <Table.Cell>
        <Link to={`/posts/edit/${post._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deletePost(post._id)} >Delete</Button>
      </Table.Cell>
    </Table.Row>
  )
}