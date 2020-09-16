import React, { Component } from 'react'
import PostListDetail from './PostListDetail'

class PostList extends Component {
  render() {
    const { postList } = this.props;
    return(
      <div id="post-list">
        {postList.map(post => <PostListDetail key={post.id} post={post} />)}
      </div>
    )
  }
}

export default PostList