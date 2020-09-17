import React, { Component } from 'react'
import PostListDetail from './PostListDetail'
import './PostList.scss'

class PostList extends Component {
  render() {
    const { handleDelete, postList } = this.props;
    return(
      <div className="postlist">
        {postList.map(post => (
          <PostListDetail
            handleDelete={handleDelete}
            key={post.id}
            post={post}
          />)
        )}
      </div>
    )
  }
}

export default PostList