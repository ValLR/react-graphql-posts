import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { ELIMINATE_POST } from '../../Apollo/Mutations/PostListMutations'

class PostListDetail extends Component {
  render() {
    const { handleDelete, post } = this.props
    return (
      <div className="postlist__item" key={post.id}>
        <div className="postlist__title-container">
          <h4 className="postlist__title">
            {post.title}
          </h4>
          <p className="postlit__author">
            {` by ${post.user.username}`}
          </p>
        </div>
        <p className="postlist__body">
          {post.body}
        </p>
        <div className="postlist__button-row">
          <Link exact to={`/post/${post.id}`} className="postlist__link">
            Go to post
          </Link>
          <Link
            exact to={`/edit/${post.id}`}
            className="postlist__link"
          >
            Edit post
          </Link>
          <Mutation mutation={ELIMINATE_POST}>
            {(deletePost, {loading, error }) => {
              return (
                <div>
                <button
                  className="postlist__link postlist__link--button"
                  disabled={loading}
                  onClick={e => {
                    e.preventDefault()
                    handleDelete()
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
      </div>
    )
  }
}

export default PostListDetail
