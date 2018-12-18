import React from 'react'
import axios from 'axios'
import { Form, Input } from 'antd'
import ProgressBar from '../Core/ProgressBar'
import Button from '../Core/Button'

const FormItem = Form.Item
const { TextArea } = Input

class question extends React.Component {
  state = {
    questions: [],
    startIndex: 0,
    pageIndex: 1,
    answers: []
  }
  componentDidMount = async () => {
    let queryQuestion = await axios.get(process.env.QUESTION+'/api/questions')
    this.setState({
      questions: queryQuestion.data.questions
    })
    for (let index = 0; index < this.state.questions.length; index++) {
      this.state.answers.push({ questionId: index + 1, ans_content: '' })
    }
  }

  setAnswerByQuestionId = (questionId, newAnswer) => {
    return this.state.answers.map(answer => {
      if (answer.questionId === questionId) {
        answer.ans_content = newAnswer
      }
      return answer
    })
  }
  handleFields = e => {
    const newAnswer = e.target.value
    const questionId = parseInt(e.target.id)
    const answers = this.setAnswerByQuestionId(questionId, newAnswer)
    this.setState({ answers })
  }

  handleNext = () => {
    this.setState({
      startIndex: this.state.startIndex + 3,
      pageIndex: this.state.pageIndex + 1
    })
  }
  handleBack = () => {
    this.setState({
      startIndex: this.state.startIndex - 3,
      pageIndex: this.state.pageIndex - 1
    })
  }

  findAnswerByQuestionId = (questionId) => {
   return this.state.answers.find(ans => ans.questionId == questionId)
  }

  showAnswer = questionId => {
    let answer = this.findAnswerByQuestionId(questionId)
    if (answer) {
      return answer.ans_content 
    }
    return undefined
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
            <div style={{background:'gray'}}></div>
              <ProgressBar
                current={this.state.pageIndex}
                questions={this.state.questions}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 mx-auto">
              <Form layout="vertical">
                {this.state.questions.map((data, key) => {
                  if (
                    key <= this.state.startIndex + 2 &&
                    key >= this.state.startIndex
                  )
                    return (
                      <FormItem key={key}>
                        <p>
                          คำถามที่ {data.id} : {data.content}
                        </p>
                        <TextArea
                          name="ans_content"
                          onChange={this.handleFields}
                          autosize={{ minRows: 4, maxRows: 10 }}
                          id={data.id}
                          value={this.showAnswer(data.id)}
                        />
                      </FormItem>
                    )
                })}
                <FormItem>
                  <div className="row">
                    <div className="col text-left">
                      <Button type='default' size='large' onClick={() => this.handleBack()} className='px-5 ml-0'>
                        ย้อนกลับ
                      </Button>
                    </div>
                    <div className="col text-right">
                      <Button type='primary' size='large' onClick={() => this.handleNext()} className='px-5 mr-0'>
                        ถัดไป
                      </Button>
                    </div>
                  </div>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default question
