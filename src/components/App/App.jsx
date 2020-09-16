import React from 'react'
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import HomeView from '../Home/HomeView'
import PostEdit from '../PostForm/PostEdit'
import PostForm from '../PostForm/PostForm'
import client from '../../Apollo/config';
import './App.css'

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomeView} />
        <Route path={'/new'} render={props => <PostForm {...props} />} />
        <Route path={'/post/:id'} render={props => <PostEdit mode="view" {...props} />} />
        <Route path={'/edit/:id'} render={props => <PostEdit mode="edit" {...props} />} />
        <Redirect from="*" to={'/'} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
)

export default App
