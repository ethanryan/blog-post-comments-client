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
          content: 'content_here',
          showEditForm: false,
        }
      ],
      // showEditForm: false,
    }
  }


  componentDidMount() {
    api.getPosts()
    .then( data => this.setState({
      posts: data
    }) )
    api.getComments()
    .then( data => this.setState({
      comments: data,
    }) )
    // if (this.state.comments.length > 0) {
  //   this.setState( ({comments}) => ({comments: {
  //     ...comments,
  //     showEditForm: false,
  //   }})
  // )
  // }
  }

  handleSubmitPost(username, content) {
    api.createPost(username, content)
      .then( post => this.setState(
        prevState => ({
          posts: [...prevState.posts, post]
        })
      )
    )
  }

  handleSubmitComment(username, content) {
    api.createComment(username, content)
      .then( comment => this.setState(
        prevState => ({
          comments: [...prevState.comments, comment]
        })
      )
    )
  }

  handleUpdateComment(updatedComment) {
    api.updateComment(updatedComment)
    .then( comment =>
      this.updateComments(comment) //calling function below
    )
  }

  updateComments(comment) {
    var comments = this.state.comments.filter((eachComment) => { return eachComment.id !== comment.id })
    //filtering all comments, excluding unedited comment...
    comments.push(comment) //pushing edited comment into all comments...
    this.setState({
      comments: comments
    })
  }

  handleDeleteComment(id) {
  if (window.confirm("Are you sure you want to delete this comment? 😱😱😱 ")) {
    api.deleteComment(id)
      .then( () => {
        this.setState( prevState => ({
          comments: prevState.comments.filter( comment => comment.id !== id )
        }) )
      })
    }
  }

 //  handleToggleEditForm = () => {
 //   this.setState((prevState, props) => ({
 //       showEditForm: !prevState.showEditForm
 //   }))
 // };

  handleToggleEditForm = (commentObject) => {
  // var comments = {...this.state.comments}
  // comments.showEditForm =

   // this.setState((prevState, props) => ({
   //     showEditForm: !prevState.showEditForm
   // }))

  //  this.setState( ({comments}) => ({comments: {
  //     ...comments,
  //     showEditForm: true,
  //   }})
  // )

  // this.setState({
  //   comments: [
  //     {
  //       username: commentObject.username,
  //       content: commentObject.content,
  //       showEditForm: true,
  //     }
  //   ]
  // })

  // this.setState({
  //   comments: [
  //     Object.assign({}, this.state.comments, {
  //     showEditForm: true,
  //   }),
  // ]
  // });
 };


render() {

  console.log('state from BlogPostCommentsContainer: ', this.state)
  return(
    <div>

      <CreatePostForm
        //props for CreatePostForm
        handleSubmit={this.handleSubmitPost.bind(this)}
      />

      <AllPosts
        //props for AllPosts
        posts={this.state.posts}
        comments={this.state.comments}
        handleUpdateComment={this.handleUpdateComment.bind(this)}
        handleDeleteComment={this.handleDeleteComment.bind(this)}
        handleToggleEditForm={this.handleToggleEditForm.bind(this)}
        showEditForm={this.state.showEditForm}

        //props for CreateCommentForm
        handleSubmit={this.handleSubmitComment.bind(this)}
      />

    </div>
  )
}
}

export default BlogPostCommentsContainer
