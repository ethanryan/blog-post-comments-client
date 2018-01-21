import React, {Component} from 'react'

//import * as api from '../api'

//import CreateUrlForm from '../components/CreateUrlForm'
//import AllUrls from '../components/AllUrls'


class BlogPostCommentsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [
        {link: 'url_here'}
      ],
    }
  }

  // componentDidMount() {
  //   api.getUrls()
  //   .then( data => this.setState({
  //     urls: data
  //   }) )
  // }
  //
  // handleSubmit(url) {
  //   api.createUrl(url)
  //   .then( url => this.setState(
  //     prevState => ({
  //       urls: [...prevState.urls, url]
  //     })
  //   )
  // )
  // }


render() {

  console.log('state from BlogPostCommentsContainer: ', this.state)
  return(
    <div>

      {/* <CreateUrlForm
        //props for CreateUrlForm
        handleSubmit={this.handleSubmit.bind(this)}
      />

      <AllUrls
        //props for AllUrls
        urls={this.state.urls}
      /> */}

    </div>
  )
}
}

export default BlogPostCommentsContainer
