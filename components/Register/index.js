import React from 'react'
import RegistrationForm from './RegistrationForm'
import ProgressBar from '../Core/ProgressBar'
import axios from 'axios'

class index extends React.Component {
  state = {
    questions: [],
    startIndex: 0,
    pageIndex: 0
  }
  componentDidMount = async () => {
    let queryQuestion = await axios.get(process.env.QUESTION+'api/questions')
    console.log(queryQuestion)
    this.setState({
      questions: queryQuestion.data.question
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
