import React from 'react'

import { Card, Button } from 'semantic-ui-react'

var Parser = require('html-react-parser')

const EachCommentContent = (props) => {

  return(

    <div>
      <div className="EachCommentContent">
        <p>
          {props.commentObject.username ? props.commentObject.username : "props.commentObject.name here"}
        </p>
        <p className="biggerText">
          {props.commentObject.content ? Parser(props.commentObject.content) : "props.commentObject.content here"}
        </p>
        <p>
          Comment originally posted on: {
            props.commentObject.created_at ? new Date(props.commentObject.created_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            })
            : "props.commentObject.created_at here"
          }
        </p>
        <p>
          Updated by {
            props.commentObject.username ?
            props.commentObject.username : "props.commentObject.name here"} on: {props.commentObject.updated_at ? new Date(props.commentObject.updated_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            })
            : "props.commentObject.updated_at here"
          }
        </p>
      </div>

      <Card.Content extra>
        <div className='ui two buttons'>

          <Button
            basic
            color='green'
            onClick={() => props.handleToggleEditForm(props.commentObject)}>
            Edit
          </Button>

          <Button
            basic
            color='red'
            onClick={() => {props.handleDeleteComment(props.commentObject.id)}}>
            Delete
          </Button>
        </div>

      </Card.Content>
    </div>
  )
}

export default EachCommentContent
