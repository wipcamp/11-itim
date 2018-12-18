import React from 'react'
import axios from 'axios'
import ProgressBar from './ProgressBar.js'
import Register from '../Register'
import Questions from '../Questions'

class App extends React.Component {
  state = {
    questions: [],
    startIndex: 0,
    pageIndex: 0,
    registerVisible:'none',
    questionVisible: 'none'
  }

  componentDidMount = async () => {
    let queryQuestion = await axios.get(process.env.QUESTION + '/api/questions')
    this.setState({
      questions: queryQuestion.data.questions
    })
    this.handleChangePage()
  }

  handleChangePage = () => {
    if (this.state.pageIndex == 0) {
      this.setState({
        registerVisible: 'block',
        queryQuestion: 'none'
      })
    }else if(this.state.pageIndex >= 1 && this.state.pageIndex <= Math.round(this.state.questions.length / 3)){
      this.setState({
        questionVisible: 'block',
        registerVisible:'none'
      })
    }else{
      this.setState({
        registerVisible: 'none',
        questionVisible: 'none'
      })
    }
  }
  setPageIndex = async count => {
    this.setState({
      pageIndex: await this.state.pageIndex + count
    })
    this.handleChangePage()
  }

  render() {
    return (
      <div className="container mt-5">
        <ProgressBar
          current={this.state.pageIndex}
          questions={this.state.questions}
        />
        <div className="mt-5">
          <Register visible={this.state.registerVisible} setPageIndex={this.setPageIndex} />
        </div>
        <div className="mt-5">
          <Questions visible={this.state.questionVisible} setPageIndex={this.setPageIndex} />
        </div>
      </div>
    )
  }
}

export default App
