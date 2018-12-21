import React from 'react'
import { Card } from 'antd'
import Body from '../Core/Body'
import Profile from './Profile'
import ButtonPrimary from '../Core/Button'
import QuestionAndAnswer from './QuestionAndAnswer'

const Register = props => (
  <Body visible={props.visible}>
    <div className="container-fluid">
      <Card className="mt-2 mb-5">
        <Profile />
        <QuestionAndAnswer />
        <div className="row">
          <div className="col text-right">
            <ButtonPrimary
              onClick={() => this.nextStep()}
              className="mr-0"
            >
                        ถัดไป
            </ButtonPrimary>
          </div>
        </div>
      </Card>
    </div>
  </Body>
)

export default Register
