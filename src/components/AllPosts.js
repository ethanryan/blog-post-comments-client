import React from 'react'

import CreateCommentForm from '../components/CreateCommentForm'
import EditCommentForm from '../components/EditCommentForm'

import { Card, Button } from 'semantic-ui-react'

const AllPosts = (props) => {

  const allOfThePosts = props.posts //an array
  const allOfTheComments = props.comments //an array

  const eachPost = allOfThePosts.map( (postObject) =>

    <div key={postObject.id ? postObject.id : "postObject.id here"} className="EachPost">

      <Card fluid >
        <Card.Content>
          <Card.Header>
            <p>post id: {postObject.id ? postObject.id : "postObject.id here"}</p>
          </Card.Header>
            <p>{postObject.username ? postObject.username : "postObject.name here"}</p>
            <h2>{postObject.content ? postObject.content : "postObject.content here"}</h2>
            <p>Posted by {postObject.username ? postObject.username : "postObject.name here"} on: {postObject.created_at ? postObject.created_at : "postObject.created_at here"}</p>
            <p>Total comments: {allOfTheComments.length > 1 ? allOfTheComments.filter(comment => comment.post_id === postObject.id).length : "total comments here"}</p>
            <p>Leave a comment: <CreateCommentForm
                                  handleSubmit={props.handleSubmit}
                                  postId={postObject.id}
                                />
            </p>

            {allOfTheComments.length > 1 ? allOfTheComments.filter(comment => comment.post_id === postObject.id).map( (commentObject) =>
              <div key={commentObject.id ? commentObject.id : "commentObject.id here"} className="EachComment">
                <p>{commentObject.username ? commentObject.username : "commentObject.name here"}</p>
                <h2>{commentObject.content ? commentObject.content : "commentObject.content here"}</h2>
                <p>Posted by {commentObject.username ? commentObject.username : "commentObject.name here"} on: {commentObject.created_at ? commentObject.created_at : "commentObject.created_at here"}</p>
                <p>Update comment: <EditCommentForm
                                      handleSubmit={props.handleUpdateComment}
                                      postId={postObject.id}
                                      username={commentObject.username}
                                      content={commentObject.content}
                                      id={commentObject.id}
                                    />
                </p>
                {/* <Button.Group floated='left'>
                <Button compact color='green'
                  onClick={() => {props.handleUpdateComment(commentObject.id)}}>Update</Button>
                </Button.Group> */}
                <Button.Group floated='right'>
                <Button compact color='red'
                  onClick={() => {props.handleDeleteComment(commentObject.id)}}>Delete</Button>
                </Button.Group>
              </div>
            ) : "allOfTheComments here..."}
        </Card.Content>
      </Card>
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
