import React, { Fragment } from 'react'
import { Steps } from 'antd'

const Step = Steps.Step
const ProgressBar = (props) => (
  <Fragment>
    <Steps current={props.current}>
      <Step title="ข้อมูลส่วนตัว" />
      <Step
        title="คำถาม"
      />
      <Step
        title="คำถาม"
      />
      <Step title="ยืนยัน" />
    </Steps>
  </Fragment>
)

export default ProgressBar
