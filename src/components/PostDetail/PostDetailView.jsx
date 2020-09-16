import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { GET_POST } from '../../Apollo/Queries/PostQueries'
import ErrorView from '../Components/ErrorView'
import LoadingView from '../Components/LoadingView'
import PostDetail from '../PostDetail/PostDetail'

class PostDetailView extends Component {
  render() {
    const { id } = this.props.match.params
    return(
      <div id="post-detail">
        <Link exact to={'/'} className="link button">
          Go back
        </Link>
        <Query query={GET_POST}  variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingView />
            if (error) return <ErrorView message={error.message} />
            
            return <PostDetail post={data.post} /> 
          }}
        </Query>
      </div>
    )
  }
}

export default PostDetailView
