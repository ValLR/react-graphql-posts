import { gql } from 'apollo-boost'

export const CREATE_POST = gql`
mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`

export const ELIMINATE_POST= gql`
mutation (
  $id: ID!
) {
  deletePost(id: $id)
}
`
