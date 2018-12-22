import React, { Component } from 'react'

import ENV from '../config/envConfig'

export default class testenv extends Component {
  render () {
    console.log('auth path', ENV.PATH_AUTH)
    console.log('auth path', ENV.PATH_AUTH)
    return (
      <div>
        <p>PATH_AUTH: {ENV.PATH_AUTH || 'no auth path'}</p>
        <p>PATH_REGISTANCE: {ENV.PATH_REGISTANCE || 'no registance path'}</p>
      </div>
    )
  }
}
