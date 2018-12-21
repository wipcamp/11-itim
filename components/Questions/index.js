import React from 'react'
import { Form, Input } from 'antd'
import styled from 'styled-components'
import ButtonPrimary, { ButtonSecondary } from '../Core/Button'

import QuestionService from '../../service/QuestionService'


const FormItem = Form.Item
const { TextArea } = Input

const DivBody = styled.div`
  display: ${props => props.visible};
`

class question extends React.Component {
  state = {
    questions: [],
    startIndex: 0,
    pageIndex: 1,
    answers: []
  }
  componentDidMount = async () => {
    let queryQuestion = await QuestionService.getAllQuestion()
    this.setState({
      questions: queryQuestion.data
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
      startIndex: this.state.startIndex + 3
    })
    return 1
  }
  handleBack = () => {
    this.setState({
      startIndex: this.state.startIndex - 3
    })
    let count = -1
    return count
  }

  findAnswerByQuestionId = questionId => {
    return this.state.answers.find(ans => ans.questionId == questionId)
  }

  showAnswer = questionId => {
    let answer = this.findAnswerByQuestionId(questionId)
    if (answer) {
      return answer.ans_content
    }
    return undefined
  }

  nextStep = async () => {
    const count = await this.handleNext()
    this.props.setPageIndex(count)
  }
  backStep = async () => {
    const count = await this.handleBack()
    this.props.setPageIndex(count)
  }

  render() {
    return (
      <DivBody visible={this.props.visible} className="container-fluid">
        <div className="container">
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
                          คำถามที่ {data.id} : {data.content}
                        <TextArea
                          name="ans_content"
                          onChange={this.handleFields}
                          autosize={{ minRows: 7 }}
                          id={data.id}
                          value={this.showAnswer(data.id)}
                        />
                      </FormItem>
                    )
                })}
                <FormItem>
                  <div className="row">
                    <div className="col-6 text-left">
                      <ButtonSecondary
                        onClick={() => this.backStep()}
                        className="ml-0"
                      >
                        ย้อนกลับ
                      </ButtonSecondary>
                    </div>
                    <div className="col-6 text-right">
                      <ButtonPrimary
                        onClick={() => this.nextStep()}
                        className="mr-0"
                      >
                        ถัดไป
                      </ButtonPrimary>
                    </div>
                  </div>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </DivBody>
    )
  }
}

export default question
