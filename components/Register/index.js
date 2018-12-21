import React from 'react'
import Body from '../Core/Body'

import RegistrationForm from './RegistrationForm'

const Register = props => (
  <Body visible={props.visible}>
    <RegistrationForm setPageIndex={props.setPageIndex} setWipId={props.setWipId}/>
  </Body>
)

export default Register
