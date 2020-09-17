import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import ErrorView from '../Components/ErrorView'
import LoadingView from '../Components/LoadingView'
import { GET_POSTS } from '../../Apollo/Queries/PostQueries'
import PostList from '../PostList/PostList'
import './HomeView.scss'

const _pageQueryOptions = (page) => ({
  "options": {
    "paginate": {
      page,
      "limit": 10
    }
  }
})

class HomeView extends Component {
  constructor() {
    super()
    this.prev = null
    this.next = 1

    this.state = {
      nextPage: true
    }

    this.onPrev= this.onPrev.bind(this)
    this.onNext = this.onNext.bind(this)
  }

  onPrev() {
    this.setState({
      nextPage: false
    })
  }

  onNext() {
    this.setState({
      nextPage: true
    })
  }

  render() {
    const { nextPage } = this.state
    return(
      <div className="home">
        <div className="home__text">
          <h1>Welcome to your personal blog</h1>
          <Link exact to={'/new'} className="home__button">
            Create a new post
          </Link>
        </div>
        <Query
          query={GET_POSTS}
          variables={ _pageQueryOptions(nextPage ? this.next : this.prev) }
          notifyOnNetworkStatusChange
        >
          {({ loading, error, data, refetch, networkStatus }) => {
            if (networkStatus === 4 || loading) return <LoadingView />
            if (error) return <ErrorView message={error.message} />
            
            const { posts } = data
            const { data: postList, links } = posts
            
            
            this.prev = links.prev ? links.prev.page : null
            this.next = links.next ? links.next.page : null
            
            return (
              <div>
                <PostList postList={postList} handleDelete={() => refetch()} />
                <div className="home__pagination">
                  <button onClick={this.onPrev} disabled={this.prev === null}>{'< Previous'}</button>
                  <button onClick={this.onNext} disabled={this.next === null}>{'Next >'}</button>
                </div>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default HomeView
