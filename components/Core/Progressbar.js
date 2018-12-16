import React, { Fragment } from 'react'
import { Steps } from 'antd'

const Step = Steps.Step
const ProgressBar = (props) => (
  <Fragment>
    <Steps current={props.current}>
      <Step title="Finished" description="This is a description." />
      <Step
        title="In Progress"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </Fragment>
)

export default ProgressBar
