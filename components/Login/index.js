import React, { Fragment } from 'react'
import LoginFaceBook from './LoginFaceBook'

class index extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="container-fluid mt-5">
          <div className="row mt-5">
            <div className="col">
            </div>
            <div className="col">
              <LoginFaceBook />
            </div>
            <div className="col">
            </div>
          </div>
        </div>
      </Fragment>

    )
  }
}

export default index
