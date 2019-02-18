import React, { Fragment } from 'react'
import Complete from './Complete'

export default class RegisComplete extends React.Component {
  render () {
    return (
      <Fragment>
        <Complete
          handleCheckLoginState={this.handleCheckLoginState}
          name={this.props.name}
        />
      </Fragment>
    )
  }
}
