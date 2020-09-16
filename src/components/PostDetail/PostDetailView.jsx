import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PostDetailConnect from './PostDetailConnect'


class PostDetailView extends Component {
  render() {
    const { id } = this.props.match.params
    return(
      <div id="post-detail">
        <Link exact to={'/'} className="link button">
          Go back
        </Link>
        <PostDetailConnect id={id} />
      </div>
    )
  }
}

export default PostDetailView
