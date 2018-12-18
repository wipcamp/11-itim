import React from 'react'
import Cookies from 'js-cookie'

import QuestionService from '../../service/QuestionService'
import RegistrationForm from './RegistrationForm'
import ProgressBar from '../Core/Progressbar'

class index extends React.Component {
  state = {
    questions: [],
    startIndex: 0,
    pageIndex: 0
  }
  componentDidMount = async () => {
    let queryQuestion = await QuestionService.getQuestion()
    this.setState({
      questions: queryQuestion.data.questions
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container mt-5">
          <ProgressBar
            current={this.state.pageIndex}
            questions={this.state.questions}
          />
        </div>
        <RegistrationForm />
      </div>
    )
  }
}

export default index
