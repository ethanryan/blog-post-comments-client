import React from 'react'

import CreateCommentForm from '../components/CreateCommentForm'
import AllComments from '../components/AllComments'

import { Card, Icon, Modal } from 'semantic-ui-react'

const EachPost = (props) => {

  const allOfThePosts = props.posts //an array
  const allOfTheComments = props.comments //an array

  const eachPost = allOfThePosts.map( (postObject) =>

  <div key={postObject.id ? postObject.id : "postObject.id here"} className="EachPost">

    {/* <Modal trigger={<Button>Show Modal</Button>}> */}
    <Modal className="whiteSpace" trigger={
      <Card fluid>
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
            <Icon name='user' />
            <span>
              Total comments: {allOfTheComments.length > 1 ? allOfTheComments.filter(comment => comment.post_id === postObject.id).length : "total comments here"}
            </span>
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
          <Icon name='user' />
          <span>
            Total comments: {allOfTheComments.length > 1 ? allOfTheComments.filter(comment => comment.post_id === postObject.id).length : "total comments here"}
          </span>
        </p>

      </Card.Content>



      <Card.Content>
        <AllComments
          comments={props.comments}
          posts={props.posts}
          postObject={postObject}
          handleUpdateComment={props.handleUpdateComment}
          handleDeleteComment={props.handleDeleteComment}
          handleToggleEditForm={props.handleToggleEditForm}
          showEditForm={props.showEditForm}
        />
      </Card.Content>


      <CreateCommentForm
        handleSubmit={props.handleSubmit}
        postId={postObject.id}
      />

    </Card>
  </Modal>
</div>
)

// console.log('EachPost props: ', props)
// console.log('eachPost: ', eachPost)

return(
  <div>
    <h1 className="center">EachPost listed below</h1>
    <div>{ eachPost.reverse() }</div>
  </div>
)
}

export default EachPost
