import React from 'react'
import ProgressBar from '../Core/Progressbar'
import { Form, Input } from 'antd'
import Button from '../Core/Button'
import axios from 'axios'

const FormItem = Form.Item
const { TextArea } = Input

class question extends React.Component {
  state = {
    question: [],
    startIndex: 0,
    pageIndex: 1,
    answers: []
  }
  componentDidMount = async () => {
    let queryQuestion = await axios.get(process.env.QUESTTION + '/questions')
    console.log(queryQuestion)
    this.setState({
      question: queryQuestion.data.questions
    })
    for (let index = 0; index < this.state.question.length; index++) {
      this.state.answers.push({ questionId: index + 1, ans: '' })
    }
    console.log(this.state.answers)
  }

  handleFields = e => {
    const { answers } = this.state
    let answerText = e.target.value
    let questionId = e.target.id
    let answering = answers.find(answer => {
      return answer.questionId == questionId
    })
    answering.ans = answerText
    const newAnswer = answers.splice(0)
    this.setState({
      answers: newAnswer
    })
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

  showAnser = questionId => {
    let answer = this.state.answers.find(ans => ans.questionId == questionId)
    if (answer) {
      return answer.ans
    }
    return undefined
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <ProgressBar
                current={this.state.pageIndex}
                question={this.state.question}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 mx-auto">
              <Form layout="vertical">
                {this.state.question.map((data, key) => {
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
                          name="ans"
                          onChange={this.handleFields}
                          autosize={{ minRows: 4, maxRows: 10 }}
                          id={data.id}
                          value={this.showAnser(data.id)}
                        />
                      </FormItem>
                    )
                })}
                <FormItem>
                  <div className="row">
                    <div className="col text-left">
                      <Button type='default' size='large' onClick={() => this.handleBack} className='px-5 ml-0'>
                        ย้อนกลับ
                      </Button>
                    </div>
                    <div className="col text-right">
                      <Button type='primary' size='large' onClick={() => this.handleNext} className='px-5 mr-0'>
                        บันทึกและถัดไป
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
