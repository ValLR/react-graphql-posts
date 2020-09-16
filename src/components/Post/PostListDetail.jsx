import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostListDetailDelete from './PostListDetailDelete'

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
        <Link exact to={`/post/${post.id}`} className="link detail">
          Go to post
        </Link>
        <Link exact to={`/edit/${post.id}`} className="link detail edit">
          Edit post
        </Link>
        <PostListDetailDelete id={post.id} />
      </div>
    )
  }
}

export default PostListDetail
