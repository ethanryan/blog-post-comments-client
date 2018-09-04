import React from 'react'

import EditCommentForm from '../components/EditCommentForm'
import EachCommentContent from '../components/EachCommentContent'

const EachComment = (props) => {

  const allOfTheComments = props.comments //an array
  const postObject = props.postObject

  const eachComment = allOfTheComments.filter(comment => comment.post_id === postObject.id).map( (commentObject) =>

  <div key={commentObject.id ? commentObject.id : "commentObject.id here"} className="EachComment">

    {commentObject.editable === true ?
      <EditCommentForm
        handleSubmit={props.handleUpdateComment}
        postId={postObject.id}
        username={commentObject.username}
        content={commentObject.content}
        id={commentObject.id}
      />
      :
      <EachCommentContent
        commentObject={commentObject}
        handleToggleEditForm={props.handleToggleEditForm}
        handleDeleteComment={props.handleDeleteComment}
      />

      // <div>
      // <div className="EachCommentContent">
      //   <p>{commentObject.username ? commentObject.username : "commentObject.name here"}</p>
      //   <p className="biggerText">{commentObject.content ? Parser(commentObject.content) : "commentObject.content here"}</p>
      //   <p>Comment originally posted on: {commentObject.created_at ? new Date(commentObject.created_at).toLocaleString('en-US', {
      //     weekday: 'short',
      //     month: 'short',
      //     day: 'numeric',
      //     year: 'numeric',
      //     hour: 'numeric',
      //     minute: 'numeric',
      //     hour12: true,
      //     timeZoneName: 'short'
      //   }) : "commentObject.created_at here"}</p>
      //   <p>Updated by {commentObject.username ? commentObject.username : "commentObject.name here"} on: {commentObject.updated_at ? new Date(commentObject.updated_at).toLocaleString('en-US', {
      //     weekday: 'short',
      //     month: 'short',
      //     day: 'numeric',
      //     year: 'numeric',
      //     hour: 'numeric',
      //     minute: 'numeric',
      //     hour12: true,
      //     timeZoneName: 'short'
      //   }) : "commentObject.updated_at here"}</p>
      // </div>
      //
      //   <Card.Content extra>
      //     <div className='ui two buttons'>
      //
      //       <Button
      //         basic
      //         color='green'
      //         onClick={() => props.handleToggleEditForm(commentObject)}
      //         >Edit</Button>
      //
      //       <Button
      //         basic
      //         color='red'
      //         onClick={() => {props.handleDeleteComment(commentObject.id)}}
      //         >Delete</Button>
      //       </div>
      //
      //   </Card.Content>
      // </div>
    }
  </div>
  )

    return (
      <div>
        {eachComment}
      </div>
    )
  }

  export default EachComment
