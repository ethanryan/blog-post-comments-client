import React from 'react'

import EachComment from '../components/EachComment'

const AllComments = (props) => {

  const allOfTheComments = props.comments //an array

  return(
    <div>

      {allOfTheComments.length > 1 ?
        <EachComment
          comments={props.comments}
          posts={props.posts}
          postObject={props.postObject}
          handleUpdateComment={props.handleUpdateComment}
          handleDeleteComment={props.handleDeleteComment}
          handleToggleEditForm={props.handleToggleEditForm}
          showEditForm={props.showEditForm}
        />
        : "allOfTheComments here..."}

    </div>
  )
}

export default AllComments
