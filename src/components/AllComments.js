import React from 'react'

import EditCommentForm from '../components/EditCommentForm'

import { Card, Button, Icon, Modal } from 'semantic-ui-react'

const AllComments = (props) => {

  const allOfTheComments = props.comments //an array
  const allOfThePosts = props.posts //an array
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

          {/* {props.showEditForm === true ? */}
          {commentObject.showEditForm === true ?
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

  console.log('AllComments props: ', props)
  return(
    <div className="AllPosts">
      {allOfTheComments.length > 1 ? eachComment : "allOfTheComments here..."}
      {/* <h3>Total posts in database: {allOfThePosts.length}</h3>
      <EachPost
        //props for EachPost
        posts={props.posts}
        comments={props.comments}
        handleUpdateComment={props.handleUpdateComment}
        handleDeleteComment={props.handleDeleteComment}
        handleToggleEditForm={props.handleToggleEditForm}
        showEditForm={props.showEditForm}

        //props for CreateCommentForm
        handleSubmit={props.handleSubmitComment}
      /> */}
    </div>
  )

}

export default AllComments
