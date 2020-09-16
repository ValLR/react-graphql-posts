import React from 'react'
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import HomeView from '../Home/HomeView'
import PostDetailView from '../PostDetail/PostDetailView'
import './App.css'

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
})


const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomeView} />
        <Route path={'/post/:id'} render={props => <PostDetailView {...props} />} />
        <Redirect from="*" to={'/'} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
)

export default App
