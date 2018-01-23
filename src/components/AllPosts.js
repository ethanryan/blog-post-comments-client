import React from 'react'

import CreateCommentForm from '../components/CreateCommentForm'
import EditCommentForm from '../components/EditCommentForm'

import { Card, Button, Icon, Modal } from 'semantic-ui-react'

const AllPosts = (props) => {

  const allOfThePosts = props.posts //an array
  const allOfTheComments = props.comments //an array

  const eachPost = allOfThePosts.map( (postObject) =>

    <div key={postObject.id ? postObject.id : "postObject.id here"} className="EachPost">

      {/* <Modal trigger={<Button>Show Modal</Button>}> */}
      <Modal className="whiteSpace" trigger={
        <Card fluid >
          <Card.Content>

            <Card.Header>
              <p>{postObject.username ? postObject.username : "postObject.name here"}</p>
            </Card.Header>

            <Card.Meta>
              <p>post id: {postObject.id ? postObject.id : "postObject.id here"}</p>
            </Card.Meta>

            <Card.Description>
              <h2>{postObject.content ? postObject.content : "postObject.content here"}</h2>
            </Card.Description>

            </Card.Content>

          <Card.Content extra>

            <p>Posted by {postObject.username ? postObject.username : "postObject.name here"} on: {postObject.created_at ? new Date(postObject.created_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            }) : "postObject.created_at here"}</p>

            <p>
              <a>
              <Icon name='user' />
                <span>
                  Total comments: {allOfTheComments.length > 1 ? allOfTheComments.filter(comment => comment.post_id === postObject.id).length : "total comments here"}
                </span>
              </a>
            </p>
          </Card.Content>
        </Card>
      }>




      <Card fluid >
        <Card.Content>

          <Card.Header>
            <p>{postObject.username ? postObject.username : "postObject.name here"}</p>
          </Card.Header>

          <Card.Meta>
            <p>post id: {postObject.id ? postObject.id : "postObject.id here"}</p>
          </Card.Meta>

          <Card.Description>
            <h2>{postObject.content ? postObject.content : "postObject.content here"}</h2>
          </Card.Description>

          </Card.Content>

          <Card.Content extra>

            <p>Posted by {postObject.username ? postObject.username : "postObject.name here"} on: {postObject.created_at ? new Date(postObject.created_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            }) : "postObject.created_at here"}</p>

            <p>
              <a>
              <Icon name='user' />
                <span>
                  Total comments: {allOfTheComments.length > 1 ? allOfTheComments.filter(comment => comment.post_id === postObject.id).length : "total comments here"}
                </span>
              </a>
            </p>

          {allOfTheComments.length > 1 ? allOfTheComments.filter(comment => comment.post_id === postObject.id).map( (commentObject) =>
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
                  >Edit</Button>

                <Button
                  basic
                  color='red'
                  onClick={() => {props.handleDeleteComment(commentObject.id)}}
                  >Delete</Button>

              </div>
            </Card.Content>

              {props.showEditForm === true ?
              <EditCommentForm
                handleSubmit={props.handleUpdateComment}
                postId={postObject.id}
                username={commentObject.username}
                content={commentObject.content}
                id={commentObject.id}
              /> : ""}

          </div>
        ) : "allOfTheComments here..."}

        <p>
          <CreateCommentForm
          handleSubmit={props.handleSubmit}
          postId={postObject.id}
          />
        </p>

          </Card.Content>

      </Card>
    </Modal>
    </div>
  )

//console.log('allOfThePosts.length: ', allOfThePosts.length)
// console.log('AllPosts props: ', props)
// console.log('allOfThePosts: ', allOfThePosts)
// console.log('eachPost: ', eachPost)

return(
  <div className="AllPosts">
    <p>Total posts in database: {allOfThePosts.length}</p>

    <p>AllPosts listed below</p>

    <div>{ eachPost.reverse() }</div>
  </div>
  )
}


export default AllPosts
