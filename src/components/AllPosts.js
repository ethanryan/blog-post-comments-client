import React from 'react'

import CreateCommentForm from '../components/CreateCommentForm'

import { Card } from 'semantic-ui-react'

const AllPosts = (props) => {

  const allOfThePosts = props.posts //an array
  const allOfTheComments = props.comments //an array

  //const result = words.filter(word => word.length > 6);

  // const filteredComments = allOfTheComments.filter(comment => comment.post_id === postObject.id)
  const arrayOfPostIds = allOfThePosts.reverse().map( (postObject) => postObject.id)

  // const filteredComments
  // const filteredComments = allOfTheComments.filter(comment => comment.post_id === arrayOfPostIds.find(function(element) { return element === comment.post_id }) )
  //filteredComments is an array

  // function getPostObjectId(number) {
  //   return number
  // }

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
            <p>Total comments: {allOfTheComments.filter(comment => comment.post_id === postObject.id).length}</p>
            <p>Leave a comment: <CreateCommentForm
                                  handleSubmit={props.handleSubmit}
                                />
            </p>

            {allOfTheComments.filter(comment => comment.post_id === postObject.id).map( (commentObject) =>
              <div key={commentObject.id ? commentObject.id : "commentObject.id here"} className="EachComment">
                <p>{commentObject.username ? commentObject.username : "commentObject.name here"}</p>
                <h2>{commentObject.content ? commentObject.content : "commentObject.content here"}</h2>
                <p>Posted by {commentObject.username ? commentObject.username : "commentObject.name here"} on: {commentObject.created_at ? commentObject.created_at : "commentObject.created_at here"}</p>

              </div>
            )}
        </Card.Content>
      </Card>
    </div>
  )

//console.log('allOfThePosts.length: ', allOfThePosts.length)
console.log('AllPosts props: ', props)
console.log('allOfThePosts: ', allOfThePosts)
console.log('eachPost: ', eachPost)
console.log('arrayOfPostIds ::::', arrayOfPostIds)


return(
  <div className="AllPosts">
    <p>Total posts in database: {allOfThePosts.length}</p>

    <p>AllPosts listed below</p>

    <div>{ eachPost.reverse() }</div>
  </div>
  )
}


export default AllPosts
