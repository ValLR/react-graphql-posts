import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { CREATE_POST } from '../../Apollo/Mutations/PostListMutations'

class PostCreateForm extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      body: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, body } = this.state
    return(
      <Mutation mutation={CREATE_POST}>
        {(createPost, {loading, error, data}) => (
          data ? <Redirect from="*" to={'/'} /> : (
            <form
              onSubmit={e => {
                e.preventDefault()
                createPost({
                  variables: {
                    'input': { 
                      title,
                      body
                    }
                  }
                })
              }}
            >
            <div>
              <input 
                placeholder="Title"
                type="text"
                name="title"
                onChange={this.handleChange}
                value={title}
              />
            </div>
            <div>
              <textarea
                placeholder="Write down your post here"
                name="body"
                id="body"
                cols="30"
                rows="10"
                onChange={this.handleChange}
                value={body}
              />
            </div>
            <button disabled={loading} type="submit">
              Submit
            </button>
            {error && <p>{error.message}</p>}
            </form>
          )
        )}
      </Mutation>
    )
  }
}

export default PostCreateForm
