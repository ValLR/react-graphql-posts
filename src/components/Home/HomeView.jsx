import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomeConnect from './HomeConnect'


class HomeView extends Component {
  render() {
    return(
      <div id="home">
        <h1>Home</h1>
        <Link exact to={`/new`} className="link button">
          Create a new post
        </Link>
        <HomeConnect />
      </div>
    )
  }
}

export default HomeView
