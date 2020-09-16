import React from 'react'
import { gql, useMutation } from '@apollo/client'


const ELIMINATE_POST= gql`
mutation (
  $id: ID!
) {
  deletePost(id: $id)
}
`

function PostCreateForm({ id }) {
  const [deletePost, { loading, error }] = useMutation(ELIMINATE_POST);

  function handleDeletePost(event) {
    event.preventDefault();
    deletePost({
      variables: {
        id
      }
    });
  }

  return (
    <div>
      <button disabled={loading} onClick={handleDeletePost}>
        Delete post
      </button>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default PostCreateForm
