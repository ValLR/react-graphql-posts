import React, { Component } from 'react'
import HomeConnect from './HomeConnect'


class HomeView extends Component {
  render() {
    return(
      <div id="home">
        <h1>Home</h1>
        <HomeConnect />
      </div>
    )
  }
}

export default HomeView
