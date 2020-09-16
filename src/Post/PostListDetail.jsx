import React, { Component } from 'react'

class PostListDetail extends Component {
  render() {
    const { post } = this.props
    return (
      <div className="post-list detail" key={post.id}>
        <p className="title">
          {`${post.title} by ${post.user.username}`}
        </p>
        <p className="body">
          {post.body}
        </p>
      </div>
    )
  }
}

export default PostListDetail
