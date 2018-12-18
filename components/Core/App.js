import React from 'react'
import axios from 'axios'
import ProgressBar from './ProgressBar.js'
import Register from '../Register'
import Questions from '../Questions'

class App extends React.Component {
  state = {
    questions: [],
    startIndex: 0,
    pageIndex: 0
  }

  componentDidMount = async () => {
    let queryQuestion = await axios.get(process.env.QUESTION + '/api/questions')
    this.setState({
      questions: queryQuestion.data.questions
    })
  }

  setPageIndex = async count => {
    this.setState({
      pageIndex: this.state.pageIndex + count
    })
  }

  render() {
    return (
      <div className="container mt-5">
        <ProgressBar
          current={this.state.pageIndex}
          questions={this.state.questions}
        />
        <div className="mt-5">
          <Register setPageIndex={this.setPageIndex} />
        </div>
        <div className="mt-5">
          <Questions setPageIndex={this.setPageIndex} />
        </div>
      </div>
    )
  }
}

export default App
