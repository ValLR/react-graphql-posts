import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { ELIMINATE_POST } from '../../Apollo/Mutations/PostListMutations'

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
        <Mutation mutation={ELIMINATE_POST}>
          {(deletePost, {loading, error, data}) => {
            return (
              <div>
              <button
                disabled={loading}
                onClick={e => {
                  e.preventDefault()
                  deletePost({
                    variables: {
                      id: post.id
                    }
                  })
                }}
              >
                Delete post
              </button>
              {error && <p>{error.message}</p>}
            </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default PostListDetail
