import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostCreateForm from './PostCreateForm'


class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Create a new post</h1>
        <PostCreateForm />
        <Link exact to={'/'} className="link button">
          Cancel
        </Link>
      </div>
    )
  }
}

export default PostForm
