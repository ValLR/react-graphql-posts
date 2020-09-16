import React from 'react'
import { gql, useMutation } from '@apollo/client'


const CREATE_POST = gql`
mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`

function PostCreateForm() {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  function handleCreatePost(event) {
    event.preventDefault();
    createPost({
      variables: {
        'input': { title, body }
      }
    });
  }

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleCreatePost}>
        <div>
          <input 
             placeholder="Title"
             type="text"
             name="title"
             onChange={(event) => setTitle(event.target.value)}
           />
        </div>
        <div>
          <textarea
            placeholder="Write down your post here"
            name="body"
            id="body"
            cols="30"
            rows="10"
            onChange={(event) => setBody(event.target.value)}
          />
        </div>
        <button disabled={loading} type="submit">
          Submit
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}

export default PostCreateForm
