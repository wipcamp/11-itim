import React from 'react'
import { Form, Input,Card } from 'antd'
import styled from 'styled-components'
import ButtonPrimary, { ButtonSecondary } from '../Core/Button'
import QuestionService from '../../service/QuestionService'
import { Subtitle } from '../Core/Text'
import config from '../../config/fonts'

const FormItem = Form.Item
const { TextArea } = Input

const StyledTextArea = styled(TextArea)`
  font-size: ${config.paragraph};
`

const CardReponsive = styled(Card)`
      
    @media (max-width : 768px){
    .ant-card-body{
      border:0;
      margin:0px 2px 0px 10px;
      padding:5%;
    }
      border:0;
      margin:0;
      padding:0px;
    .ant-card-bordered{
      border:0px;
    }

    .ant-form-item{
      margin-bottom:0px;
    }

    .ant-card-bordered{
      border:0;
      margin:0px 0px 0px 0px;
      padding:0px;
    }
  }
`
class question extends React.Component {
  state = {
    startIndex: 0
  }
  componentDidMount = async () => {}

  handleNext = () => {
    this.props.changeQuestionStartIndex(this.props.questionStartIndex + 3)
    return 1
  }
  handleBack = () => {
    this.props.changeQuestionStartIndex(this.props.questionStartIndex - 3)
    let count = -1
    return count
  }

  findAnswerByquestion_id = question_id => {
    return this.props.answers.find(ans => ans.question_id == question_id)
  }
  showAnswer = question_id => {
    let answer = this.findAnswerByquestion_id(question_id)
    console.log("Anwser : ",answer)
    if (answer) {
      return answer.ans_content
    }
    return undefined
  }

  handleNextButton = e => {
    e.preventDefault()
    QuestionService.sendQuestions(this.props.answers)
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

  getValue = (e) =>{
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <CardReponsive className="col-12 mt-2 mx-auto mb-3">
            <Form
              method="post"
              onSubmit={this.handleNextButton}
              layout="vertical"
            >
              {this.props.questions.map((data, key) => {
                if (
                  key <= this.props.questionStartIndex + 2 &&
                  key >= this.props.questionStartIndex
                )
                  return (
                    <FormItem key={key}>
                      <Subtitle>
                        คำถามที่ {data.id} : {data.content}
                      </Subtitle>
                      <StyledTextArea
                        required
                        name="ans_content"
                        onChange={(e) => this.getValue(e)}
                        autosize={{ minRows: 7 }}
                        id={data.id}
                        defaultValue={this.showAnswer(data.id)}
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
                    <ButtonPrimary htmlType="submit" className="mr-0">
                      ถัดไป
                    </ButtonPrimary>
                  </div>
                </div>
              </FormItem>
            </Form>
          </CardReponsive>
        </div>
      </div>
    )
  }
}

export default question
