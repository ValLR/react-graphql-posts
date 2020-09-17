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

    return(
      <div className="post-form">
        <div className="post-form__text">
          {mode === 'edit' && <h1>Edit Post</h1>}
          <Link exact to={'/'} className="post-form__link post-form__link--cancel">
            Go back
          </Link>
        </div>
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
