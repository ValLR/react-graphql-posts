import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import './App.css'

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api'
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </ApolloProvider>
)

export default App
