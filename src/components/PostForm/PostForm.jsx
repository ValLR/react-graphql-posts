import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostCreateForm from './PostCreateForm'
import './PostForm.scss'

class PostForm extends Component {
  render() {
    return (
      <div className="post-form">
        <div className="post-form__text">
          <div>
            <h1>Create a new post</h1>
          </div>
          <div>
            <Link exact to={'/'} className="post-form__link post-form__link--cancel">
              Go Back
            </Link>
          </div>
        </div>
        <PostCreateForm />
      </div>
    )
  }
}

export default PostForm
