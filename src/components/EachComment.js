import React from 'react'

import EditCommentForm from '../components/EditCommentForm'

import { Card, Button } from 'semantic-ui-react'

const EachComment = (props) => {

  const allOfTheComments = props.comments //an array
  const postObject = props.postObject

  const eachComment = allOfTheComments.filter(comment => comment.post_id === postObject.id).map( (commentObject) =>
  <div key={commentObject.id ? commentObject.id : "commentObject.id here"} className="EachComment">
    <p>{commentObject.username ? commentObject.username : "commentObject.name here"}</p>
    <h2>{commentObject.content ? commentObject.content : "commentObject.content here"}</h2>
    <p>Comment originally posted on: {commentObject.created_at ? new Date(commentObject.created_at).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    }) : "commentObject.created_at here"}</p>
    <p>Updated by {commentObject.username ? commentObject.username : "commentObject.name here"} on: {commentObject.updated_at ? new Date(commentObject.updated_at).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    }) : "commentObject.updated_at here"}</p>

    <Card.Content extra>
      <div className='ui two buttons'>

        <Button
          basic
          color='green'
          onClick={props.handleToggleEditForm}
          // onClick={props.handleToggleEditForm(commentObject)}
          >Edit</Button>

          <Button
            basic
            color='red'
            onClick={() => {props.handleDeleteComment(commentObject.id)}}
            >Delete</Button>

          </div>
        </Card.Content>

        {/* {commentObject.showEditForm === true ? */}
        {props.showEditForm === true ?
          <EditCommentForm
            handleSubmit={props.handleUpdateComment}
            postId={postObject.id}
            username={commentObject.username}
            content={commentObject.content}
            id={commentObject.id}
            // /> : ""}
          /> : "commentObject.showEditForm === false!!!"}

        </div>
      )

      // console.log('EachComment props: ', props)
      return(
        <div>
          {eachComment}
        </div>
      )
    }

    export default EachComment
