import React, { Fragment } from 'react'
import RegistrationForm from './RegistrationForm'
import Progressbar from './../Core/Progressbar'

class index extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="col mt-5">
          <Progressbar />
        </div>
        <RegistrationForm />
      </Fragment>
    )
  }
}

export default index
