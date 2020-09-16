import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import ErrorView from '../Components/ErrorView'
import LoadingView from '../Components/LoadingView'
import { GET_POSTS } from '../../Apollo/Queries/PostQueries'
import PostList from '../Post/PostList'

const _pageQueryOptions = () => ({
  "options": {
    "paginate": {
      "page": 1,
      "limit": 10
    }
  }
})

class HomeView extends Component {
  render() {
    return(
      <div id="home">
        <h1>Home</h1>
        <Link exact to={`/new`} className="link button">
          Create a new post
        </Link>
        <Query query={GET_POSTS}  variables={ _pageQueryOptions() }>
          {({ loading, error, data }) => {
            if (loading) return <LoadingView />
            if (error) return <ErrorView message={error.message} />
            
            const { posts } = data
            const { data: postList } = posts

            return <PostList postList={postList} />  
          }}
        </Query>
      </div>
    )
  }
}

export default HomeView
