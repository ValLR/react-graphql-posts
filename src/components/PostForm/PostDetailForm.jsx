import React, { Component } from 'react'


class PostDetailForm extends Component {
  render() {
    const { post } = this.props
    return(
      <div className="post-form">
        <h2 className="post-form__title">
          {post.title}
        </h2>
        <p className="post-form__author">
          {`By ${post.user.username}`}
        </p>
        <p className="post-form__body">
          {post.body}
        </p>
      </div>
    )
  }
}

export default PostDetailForm
