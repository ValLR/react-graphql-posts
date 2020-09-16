import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
});

export default client;
