import React from 'react'
import ProgressBar from '../Core/Progressbar'
import { Form, Input, Button } from 'antd'
import axios from 'axios'

const FormItem = Form.Item
const { TextArea } = Input

class question extends React.Component {
  state = {
    question: [],
    startIndex: 0,
    pageIndex:1
  }

  componentDidMount = async () => {
    let queryQuestion = await axios.get('http://localhost:8882/api/questions')
    console.log(queryQuestion)
    this.setState({
      question: queryQuestion.data.question
    })
  }

  handleNext = () => {
    this.setState({
      startIndex: this.state.startIndex + 3,
      pageIndex: this.state.pageIndex +1
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <ProgressBar current={this.state.pageIndex} question={this.state.question}/>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 mx-auto">
              <Form layout="vertical">
                {this.state.question.map((data, key) => {
                  if (key <= this.state.startIndex+2 && key >= this.state.startIndex)
                    return (
                      <FormItem key={key}>
                        <p>Q{data.id} : {data.q}</p>
                        <TextArea
                          placeholder="Autosize placeholder"
                          autosize={{ minRows: 4, maxRows: 10 }}
                        />
                      </FormItem>
                    )
                })}
                <FormItem>
                    <Button type="primary" onClick={() => this.handleNext()}>Next</Button>
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
