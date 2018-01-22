import React from 'react'

import { Card } from 'semantic-ui-react'

const AllPosts = (props) => {

  const allOfThePosts = props.posts //an array

  const eachPost = allOfThePosts.map( (postObject) =>

    <div key={postObject.id ? postObject.id : "postObject.id here"} className="eachPost">

      <Card fluid >
        <Card.Content>
          <Card.Header>
            <p>post id: {postObject.id ? postObject.id : "postObject.id here"}</p>
          </Card.Header>
            <p>{postObject.username ? postObject.username : "postObject.name here"}</p>
            <h2>{postObject.content ? postObject.content : "postObject.content here"}</h2>
            <p>Posted by {postObject.username ? postObject.username : "postObject.name here"} on: {postObject.created_at ? postObject.created_at : "postObject.created_at here"}</p>
        </Card.Content>
      </Card>
    </div>
  )

//console.log('allOfThePosts.length: ', allOfThePosts.length)
//console.log('eachPost: ', eachPost)

return(
  <div className="AllPosts">
    <p>Total posts in database: {allOfThePosts.length}</p>

    <p>AllPosts listed below</p>

    <div>{ eachPost.reverse() }</div>
  </div>
  )
}


export default AllPosts
