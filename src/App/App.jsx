import React from 'react'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import HomeView from '../Home/HomeView'
import './App.css'

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <HomeView />
  </ApolloProvider>
)

export default App
