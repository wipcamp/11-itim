import React from 'react'
import { Card, Modal } from 'antd'
import Router from 'next/router'

import Body from '../Core/Body'
import Profile from './Profile'
import ButtonPrimary from '../Core/Button'
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

  handleOk = e => {
    RegisterService.sendRegister(this.state.profile.comfirm_register)
    QuestionService.sendQuestions(this.state.questions)
    const { profile } = this.state
    this.setState({
      modalVisible: false,
      profile: {
        ...profile,
        confirm_register: 1
      }
    })
    setInterval(() => {
      Router.push({
        pathname: '/regiscomplete',
        query: {
          wipid: this.state.profile.wip_id,
          nickname: this.state.profile.nickname,
          fname: this.state.profile.fistname_th,
          lname: this.state.profile.lastname_th,
          confirm: this.state.profile.confirm_register
        }
      })
    }, 1000)
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      modalVisible: false
    })
  }
  render() {
    return (
      <Body visible={this.props.visible}>
        <div className="container-fluid">
          <Card className="mt-2 mb-5">
            <Profile profile={this.state.profile} />
            <QuestionAndAnswer questions={this.state.questions} />
            <div className="row">
              <div className="col text-right">
                <ButtonPrimary
                  onClick={() => this.showModal()}
                  className="mr-0"
                >
                  ถัดไป
                </ButtonPrimary>
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
              </div>
            </div>
          </Card>
        </div>
      </Body>
    )
  }
}

export default Register
