import React from 'react'
import { useQuery, gql } from '@apollo/client'
import PostList from '../Post/PostList'
import LoadingView from '../Components/LoadingView'
import ErrorView from '../Components/ErrorView'

const pageQueryOptions = {
  "options": {
    "paginate": {
      "page": 1,
      "limit": 10
    }
  }
}

const GET_POSTS = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
      body
      user {
        username
      }
    }
  }
}
`

const HomeConnect = () => {
  const { loading, error, data } = useQuery(GET_POSTS, { variables: pageQueryOptions})
  
  if (loading) return <LoadingView />
  if (error) return <ErrorView />

  return <PostList postList={data.posts.data} /> 
}

export default HomeConnect
