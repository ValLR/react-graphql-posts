import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { GET_POST } from '../../Apollo/Queries/PostQueries'
import ErrorView from '../Components/ErrorView'
import LoadingView from '../Components/LoadingView'
import PostDetail from './PostDetailForm'
import PostCreateForm from './PostCreateForm'

class PostEdit extends Component {
  render() {
    const { id } = this.props.match.params
    const { mode } = this.props

    console.log(mode)
    return(
      <div id="post-detail">
        <Link exact to={'/'} className="link button">
          Go back
        </Link>
        <Query query={GET_POST}  variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingView />
            if (error) return <ErrorView message={error.message} />
            
            return (
              (mode === 'edit')
              ? <PostCreateForm post={data.post}  /> 
              : <PostDetail post={data.post} />
            )
          }}
        </Query>
      </div>
    )
  }
}

export default PostEdit