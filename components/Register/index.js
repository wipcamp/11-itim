import React from 'react'
import RegistrationForm from './RegistrationForm'
import Progressbar from './../Core/Progressbar'
import axios from 'axios'

class index extends React.Component {
  state = {
    question: [],
    startIndex: 0,
    pageIndex: 0
  }
  componentDidMount = async () => {
    let queryQuestion = await axios.get('http://localhost:8882/api/questions')
    this.setState({
      question: queryQuestion.data.question
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="container mt-5">
          <Progressbar
            current={this.state.pageIndex}
            question={this.state.question}
          />
        </div>
        <RegistrationForm />
      </div>
    )
  }
}

export default index
