import React from 'react'

import ProgressBar from './ProgressBar.js'
import Register from '../Register'
import Questions from '../Questions'
import Confirm from '../Confirm'
import QuestionService from '../../service/QuestionService'
import Navbar from './Navbar'

class App extends React.Component {
  state = {
    questions: [],
    pageIndex: 5,
    registerVisible: 'none',
    questionVisible: 'none',
    confirmVisible: 'none',
    wipid: 0,
    nickname:''
  }

  componentDidMount = async () => {
    this.getAllQuestion()
  }
  getAllQuestion = async () => {
    let queryQuestion = await QuestionService.getAllQuestion()

    this.setState({
      questions: queryQuestion.data
    })
    this.handleChangePage()
  }

  handleChangePage = () => {
    if (this.state.pageIndex == 0) {
      this.setState({
        registerVisible: 'block',
        questionVisible: 'none',
        confirmVisible: 'none'
      })
    } else if (
      this.state.pageIndex >= 1 &&
      this.state.pageIndex <= Math.ceil(this.state.questions.length / 3)
    ) {
      this.setState({
        questionVisible: 'block',
        registerVisible: 'none',
        confirmVisible: 'none'
      })
    } else if (
      this.state.pageIndex > Math.ceil(this.state.questions.length / 3) &&
      this.state.pageIndex <= Math.ceil(this.state.questions.length / 3) + 1
    ) {
      this.setState({
        questionVisible: 'none',
        registerVisible: 'none',
        confirmVisible: 'block'
      })
    } else {
      this.setState({
        registerVisible: 'none',
        questionVisible: 'none',
        confirmVisible: 'none'
      })
    }
  }
  setPageIndex = async count => {
    this.setState({
      pageIndex: (await this.state.pageIndex) + count
    })
    this.handleChangePage()
  }
  setWipId = async (id,nickname) => {
    this.setState({
      wipid: await id,
      nickname: await nickname
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar state={this.state} />
        <div className="container mt-5">
          <ProgressBar
            current={this.state.pageIndex}
            questions={this.state.questions}
          />
          <div className="mt-5">
            <Register
              visible={this.state.registerVisible}
              setPageIndex={this.setPageIndex}
              setWipId={this.setWipId}
            />
          </div>
          <div className="mt-5">
            <Questions
              visible={this.state.questionVisible}
              setPageIndex={this.setPageIndex}
            />
          </div>
          <div className="mt-5">
            <Confirm
              visible={this.state.confirmVisible}
              setPageIndex={this.setPageIndex}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
