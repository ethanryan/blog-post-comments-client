import React from 'react'

import EachPost from '../components/EachPost'

const AllPosts = (props) => {

  const allOfThePosts = props.posts //an array
  // const allOfTheComments = props.comments //an array

  return(
    <div className="AllPosts">
      <h3>Total posts in database: {allOfThePosts.length}</h3>

      <EachPost
        //props for EachPost
        posts={props.posts}
        comments={props.comments}
        handleUpdateComment={props.handleUpdateComment}
        handleDeleteComment={props.handleDeleteComment}
        handleToggleEditForm={props.handleToggleEditForm}
        showEditForm={props.showEditForm}
        
        //props for CreateCommentForm
        handleSubmit={props.handleSubmit}
      />

    </div>
  )
}

export default AllPosts
