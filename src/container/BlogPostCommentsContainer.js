import React, {Component} from 'react'

import * as api from '../api'

import CreatePostForm from '../components/CreatePostForm'
import AllPosts from '../components/AllPosts'


class BlogPostCommentsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          username: 'username_here',
          content: 'content_here'
        }
      ],
      comments: [
        {
          username: 'username_here',
          content: 'content_here'
        }
      ],
    }
  }

  // componentDidMount() {
  //   api.getUrls()
  //   .then( data => this.setState({
  //     urls: data
  //   }) )
  // }
  //
  // handleSubmit(url) {
  //   api.createUrl(url)
  //   .then( url => this.setState(
  //     prevState => ({
  //       urls: [...prevState.urls, url]
  //     })
  //   )
  // )
  // }
  componentDidMount() {
    api.getPosts()
    .then( data => this.setState({
      posts: data
    }) )
  }

  handleSubmit(username, content) {
    api.createPost(username, content)
    .then( post => this.setState(
      prevState => ({
        posts: [...prevState.posts, post]
      })
    )
  )
  }


render() {

  console.log('state from BlogPostCommentsContainer: ', this.state)
  return(
    <div>

      <CreatePostForm
        //props for CreatePostForm
        handleSubmit={this.handleSubmit.bind(this)}
      />

      <AllPosts
        //props for AllPosts
        posts={this.state.posts}
      />

    </div>
  )
}
}

export default BlogPostCommentsContainer
