import React, { Fragment } from 'react'
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
      <Fragment>
        <div className="col mt-5">
          <Progressbar current={this.state.pageIndex} question={this.state.question}/>
        </div>
        <RegistrationForm />
      </Fragment>
    )
  }
}

export default index
