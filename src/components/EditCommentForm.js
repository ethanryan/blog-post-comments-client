import React, { Component } from 'react'

import { Form, Grid, Segment } from 'semantic-ui-react'

class EditCommentForm extends Component {

  constructor(props) {
    super(props)
    this.state=({
      username: props.username,
      content: props.content,
      post_id: props.postId,
      id: props.id,
      valid: true
    })
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    const username = event.target.value
    const usernameValid = this.validateString(username)
    this.setState({
      username: event.target.value,
      valid: usernameValid
    })
  }

  handleContentChange(event) {
    const content = event.target.value
    const usernameValid = this.validateString(content)
    this.setState({
      content: event.target.value,
      valid: usernameValid
    })
  }

  validateString(string) {
    var answer = string.length > 0
    console.log(answer)
    return answer
  }

  handleSubmit(event) {
    event.preventDefault()
    const commentObject = {
      username: this.state.username,
      content: this.state.content,
      post_id: this.state.post_id,
      id: this.state.id
    }
    console.log('EditCommentForm submitted: ', this.state)
    if (this.state.username === "") {
      alert('Updated comment must have a username!')
    }
    if (this.state.content === "") {
      alert('Updated comment must have some content!')
    }
    else {
      this.props.handleSubmit( commentObject )
    }
  }


  render() {

    const isDisabled = this.state.valid ? false : true

    let fieldContainerClass = 'field-container'

    if (!this.state.valid) {
      fieldContainerClass += ' error'
    }

    // console.log('state from EditCommentForm: ', this.state)
    // console.log('props from EditCommentForm: ', this.props)
    return(

      <div className="EditCommentForm">

        <h1 className="center">Edit Comment Here</h1>

        <Grid centered columns={2}>
          <Grid.Row centered textAlign='center'>
            <Grid.Column>

              <Form onSubmit={this.handleSubmit}>

                <p className="center">Comment ID: {this.state.id}</p>
                <p className="center">Comment on Post #{this.state.post_id}</p>

                <div className={fieldContainerClass}>
                <Form.Field
                  label="Username"
                  placeholder="username here"
                  autoFocus
                  control="input"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
                <span>must have username!</span>
                </div>

                <div className={fieldContainerClass}>
                <Form.Field
                  label="Content"
                  placeholder="content here"
                  autoFocus
                  control="input"
                  type="text"
                  value={this.state.content}
                  onChange={this.handleContentChange}
                />
                <span>comment must say something!</span>
                </div>

                  <Segment basic textAlign='center'>
                    <Form.Button
                      content="Submit"
                      type="submit"
                      color="green"
                      disabled={isDisabled}
                    />
                  </Segment>

                </Form>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
  }

  export default EditCommentForm
