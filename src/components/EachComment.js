import React from 'react'

import EditCommentForm from '../components/EditCommentForm'
import EachCommentContent from '../components/EachCommentContent'

const EachComment = (props) => {

  const allOfTheComments = props.comments //an array
  const postObject = props.postObject

  const eachComment = allOfTheComments.filter(comment => comment.post_id === postObject.id).map( (commentObject) =>

  <div
    key={commentObject.id ? commentObject.id : "commentObject.id here"}
    className="EachComment"
    >

      {
        commentObject.editable === true ?
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
