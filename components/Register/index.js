import React from 'react'
import RegistrationForm from './RegistrationForm'
import Progressbar from './../Core/Progressbar'

class index extends React.Component {
  state = {
    question: [],
    startIndex: 0,
    pageIndex: 1
  }
  render () {
    return (
      <div>
        <div className="col mt-5 container-fluid">
          <Progressbar current={this.state.pageIndex} question={this.state.question}/>
        </div>
        <RegistrationForm />
        </div>
    )
  }
}

export default index
