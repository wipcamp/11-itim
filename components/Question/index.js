import React from 'react'
import { Steps, Form, Input, Button, Radio } from 'antd'

const Step = Steps.Step
const FormItem = Form.Item
const { TextArea } = Input

class question extends React.Component {

  render () {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 mx-auto">
              <Form layout="vertical">
                <FormItem
                  label="Field A"
                >
                  <TextArea placeholder="Autosize placeholder" autosize={{ minRows: 4, maxRows: 10 }} />
                </FormItem>
                <FormItem >
                  <Button type="primary">Submit</Button>
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
