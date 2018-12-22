import React from 'react'
import { Card, Modal } from 'antd'

import Body from '../Core/Body'
import Profile from './Profile'
import ButtonPrimary, { ButtonSecondary } from '../Core/Button'
import QuestionAndAnswer from './QuestionAndAnswer'
import RegisterService from '../../service/RegisterService'
import QuestionService from '../../service/QuestionService'

class Register extends React.Component {
  state = {
    modalVisible: false,
    profile: {},
    questions: []
  }
  componentDidMount = async () => {
    this.getProfilefromDB()
    console.log(this.state.questions)
  }
  getQuestion = async () => {
    let queryQuestion = await QuestionService.getAllQuestion()
    this.setState({
      questions: queryQuestion.data
    })
  }
  getProfilefromDB = async () => {
    const profile = await RegisterService.getProfile()
    this.setState({
      profile: profile.data
    })
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleOk = async e => {
    this.props.setPageIndex(1)
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      modalVisible: false
    })
  }
  backStep = async () => {
    const count = await this.handleBack()
    this.props.setPageIndex(count)
  }
   handleBack = () => {
    this.setState({
      startIndex: this.state.startIndex - 3
    })
    let count = -1
    return count
  }
  render() {
    return (
      <Body visible={this.props.visible}>
        <div className="container-fluid">
          <Card className="mt-2 mb-5">
            <Profile profile={this.state.profile} />
            <QuestionAndAnswer questions={this.state.questions} />
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
                  onClick={() => this.showModal()}
                  className="mr-0"
                >
                  ถัดไป
                </ButtonPrimary>
              </div>
            </div>
            <Modal
              title="น้องต้องการส่งคำตอบใช่หรือไม่"
              visible={this.state.modalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <div className="row justify-content-center">
                <div className="col-11">
                  <p className="text-center">
                    หากไม่แน่ใจน้องสามารถย้อนกลับไปแก้ไขข้อมูลและคำตอบได้
                    หากกดยืนยันแล้ว จะไม่สามาถกลับมาแก้ไขได้อีก
                  </p>
                </div>
              </div>
            </Modal>
          </Card>
        </div>
      </Body>
    )
  }
}

export default Register
