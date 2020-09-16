import { gql } from 'apollo-boost'

export const GET_POST_LIST= gql`
  query GetCounterValue {
    postList @client
  }
`;

export const GET_POSTS = gql`
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
    links {
      prev {
        page
      }
      next {
        page
      }
      last {
        page
      }
      first {
        page
      }
    }
  }
}
`
export const GET_POST = gql`
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
