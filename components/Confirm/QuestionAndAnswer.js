import React from 'react'
import QuestionService from '../../service/QuestionService'


class QuestionAndAnswer extends React.Component {
  state = {
    questions:[]
  }
  componentDidMount = async () => {
    let queryQuestion = await QuestionService.getAllQuestion()
    this.setState({
      questions: queryQuestion.data
    })
    console.log(this.state.questions)
    // for (let index = 0; index < this.state.questions.length; index++) {
    //   this.state.answers.push({ questionId: index + 1, ans_content: '' })
    }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">
          <h3 className="font-weight-bold mb-4 ml-5">ตอบคำถาม</h3>
            {this.state.questions.map((data, key) => {
              return (
                <div>
                  <p key={key}>
                    คำถามที่ {data.id} : {data.content}
                  </p>
                  <p key={key}>{data.ans_content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}


export default QuestionAndAnswer
