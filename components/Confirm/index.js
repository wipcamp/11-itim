import React from 'react'
import { Card, Modal } from 'antd'
import Body from '../Core/Body'
import Profile from './Profile'
import ButtonPrimary from '../Core/Button'
import QuestionAndAnswer from './QuestionAndAnswer'

class Register extends React.Component {
  state = {
    modalVisible: false
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      modalVisible: false
    })
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
            <Profile />
            <QuestionAndAnswer />
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
