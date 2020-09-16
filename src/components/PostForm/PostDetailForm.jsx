import React, { Component } from 'react'


class PostDetailForm extends Component {
  render() {
    const { post } = this.props
    return(
      <div id="post detail">
        <h2 className="title">
          {post.title}
        </h2>
        <p className="author">
          {`By ${post.user.username}`}
        </p>
        <p className="body">
          {post.body}
        </p>
      </div>
    )
  }
}

export default PostDetailForm
