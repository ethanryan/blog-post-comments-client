import React, {Component} from 'react'

import * as api from '../api'

import CreatePostForm from '../components/CreatePostForm'

import AllPosts from '../components/AllPosts'

//redux

class BlogPostCommentsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          username: '',
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
    }
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.handleUpdateComment = this.handleUpdateComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleToggleEditForm = this.handleToggleEditForm.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }


  componentDidMount() {
    api.getPosts()
    .then( data => this.setState({
      posts: data
    }) )
    api.getComments()
    .then ( data => this.sortCommentsById(data) ) //sorting comments by ID...
    .then( data => this.setState({
      comments: data,
    }) )
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
  this.sortCommentsById(comments) //sort comments by Id...
  this.setState({
    comments: comments,
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


sortCommentsById(commentsArray) {
  commentsArray.sort(function(first, second) {
    return first.id - second.id; //sort comments by updated_at, first to last
  });
  return commentsArray
}


handleToggleEditForm(comment) {
  var comments = this.state.comments.filter((eachComment) => { return eachComment.id !== comment.id })
  //filtering all comments, excluding toggled comment...
  var editableComment = Object.assign({}, comment, {editable: true}); //make toggled comment editable...
  comments.push(editableComment) //pushing editableComment comment into all comments...
  this.sortCommentsById(comments) //sort comments by Id...
  this.setState({
    comments: comments,
  })
};


render() {

  console.log('state from BlogPostCommentsContainer: ', this.state)
  return(
    <div>

      <CreatePostForm
        //props for CreatePostForm
        handleSubmit={this.handleSubmitPost}
      />

      <AllPosts
        //props for AllPosts
        posts={this.state.posts}
        comments={this.state.comments}
        handleUpdateComment={this.handleUpdateComment}
        handleDeleteComment={this.handleDeleteComment}
        handleToggleEditForm={this.handleToggleEditForm}
        showEditForm={this.state.showEditForm}

        //props for CreateCommentForm
        handleSubmit={this.handleSubmitComment}
      />

    </div>
  )
}
}

export default BlogPostCommentsContainer
