import React, { Component } from 'react'

import './App.css'
import 'semantic-ui-css/semantic.min.css' //for semantic-ui-css

import BlogPostCommentsContainer from './container/BlogPostCommentsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to BlogPostComments</h1>
          <h2>
            The only place on the internet where anybody can say whatever they want about anything, and anyone else can leave a comment!
          </h2>
        </header>

        <BlogPostCommentsContainer />

        <div className="App-footer">
          <p id="disclaimer">
            The information contained in this website is for general information purposes only. BlogPostComments makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.

            Through this website you are able to link to other websites which are not under the control of BlogPostComments. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.

            Every effort is made to keep the website up and running smoothly. However, BlogPostComments takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
          <span>BlogPostComments</span>
        </div>

      </div>
    )
  }
}

export default App
