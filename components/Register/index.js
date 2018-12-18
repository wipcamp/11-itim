import React from 'react'
import styled from 'styled-components'

import RegistrationForm from './RegistrationForm'

const DivBody = styled.div`
  display: ${props => props.visible};
`

const Register = props => (
  <DivBody visible={props.visible}>
    <RegistrationForm setPageIndex={props.setPageIndex} setWipId={props.setWipId}/>
  </DivBody>
)

export default Register
