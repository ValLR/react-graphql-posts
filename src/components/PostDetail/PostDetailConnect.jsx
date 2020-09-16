import React from 'react'
import { useQuery, gql } from '@apollo/client'
import PostDetail from '../PostDetail/PostDetail'
import LoadingView from '../Components/LoadingView'
import ErrorView from '../Components/ErrorView'


const GET_POST = gql`
query (
  $id: ID!
) {
  post(id: $id) {
    id
    title
    body
    user {
      username
    }
  }
}
`

const PostDetailConnect = ({ id }) => {
  const { loading, error, data } = useQuery(GET_POST, { 
    variables: {
      "id": id
    }
   })
  
  if (loading) return <LoadingView />
  if (error) return <ErrorView />

  return <PostDetail post={data.post} /> 
}

export default PostDetailConnect
