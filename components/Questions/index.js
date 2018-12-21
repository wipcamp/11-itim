import React from 'react'
import { Form, Input } from 'antd'
import Body from '../Core/Body'
import ButtonPrimary, { ButtonSecondary } from '../Core/Button'

import QuestionService from '../../service/QuestionService'
import RegisterService from '../../service/RegisterService';

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
    let queryQuestion = await QuestionService.getAllQuestion()
    this.setState({
      questions: queryQuestion.data
    })
    for (let index = 0; index < this.state.questions.length; index++) {
      this.state.answers.push({ question_id: index + 1, ans_content: '' })
    }
  }

  setAnswerByQuestionId = (question_id, newAnswer) => {
    return this.state.answers.map(answer => {
      if (answer.question_id === question_id) {
        answer.ans_content = newAnswer
      }
      return answer
    })
  }
  handleFields = e => {
    const newAnswer = e.target.value
    const question_id = parseInt(e.target.id)
    const answers = this.setAnswerByQuestionId(question_id, newAnswer)
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

  findAnswerByquestion_id = question_id => {
    return this.state.answers.find(ans => ans.question_id == question_id)
  }

  showAnswer = question_id => {
    let answer = this.findAnswerByquestion_id(question_id)
    if (answer) {
      return answer.ans_content
    }
    return undefined
  }

  handleNextButton = e => {
    e.preventDefault();
    QuestionService.sendQuestions(this.state.answers)
    this.nextStep()
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
      <Body visible={this.props.visible} className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-10 mt-5 mx-auto">
              <Form method="post" onSubmit={this.handleNextButton} layout="vertical">
                {this.state.questions.map((data, key) => {
                  if (
                    key <= this.state.startIndex + 2 &&
                    key >= this.state.startIndex
                  )
                    return (
                      <FormItem key={key}>
                        คำถามที่ {data.id} : {data.content}
                        <TextArea
                        required
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
                      htmlType="submit"                        
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
      </Body>
    )
  }
}

export default question
