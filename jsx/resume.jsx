import React from 'react'
import NavBar from './navBar.jsx'
import ReactDOM from 'react-dom'
import { Container } from 'semantic-ui-react'
import PDF from 'react-pdf-js'

class Resume extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.onDocumentComplete = this.onDocumentComplete.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  onDocumentComplete (pages) {
    this.setState({ page: 1, pages })
  }

  handlePrevious () {
    this.setState({ page: this.state.page - 1 })
  }

  handleNext () {
    this.setState({ page: this.state.page + 1 })
  }

  renderPagination (page, pages) {
    let previousButton = <li className='previous' onClick={this.handlePrevious}><a href='#'><i className='fa fa-arrow-left' /> Previous</a></li>
    if (page === 1) {
      previousButton = <li className='previous disabled'><a href='#'><i className='fa fa-arrow-left' /> Previous</a></li>
    }
    let nextButton = <li className='next' onClick={this.handleNext}><a href='#'>Next <i className='fa fa-arrow-right' /></a></li>
    if (page === pages) {
      nextButton = <li className='next disabled'><a href='#'>Next <i className='fa fa-arrow-right' /></a></li>
    }
  }

  render () {
    let pagination = null
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages)
    }
    return (
      <Container fluid>
        <NavBar />
        <div>
          <PDF
            file='./resume.pdf'
            onDocumentComplete={this.onDocumentComplete}
            page={this.state.page}
          />
          {pagination}
        </div>

      </Container>

    )
  }
}

ReactDOM.render(<Resume />, document.getElementById('dashboard'))
