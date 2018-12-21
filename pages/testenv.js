import React, { Component } from 'react'

export default class testenv extends Component {
  render () {
    console.log('auth path', process.env.PATH_AUTH)
    console.log('auth path', process.env.PATH_AUTH)
    return (
      <div>
        <p>PATH_AUTH: {process.env.PATH_AUTH || 'no auth path'}</p>
        <p>PATH_REGISTANCE: {process.env.PATH_REGISTANCE || 'no registance path'}</p>
      </div>
    )
  }
}
