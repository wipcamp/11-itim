import { Button as DefaultButton } from 'antd'
import styled from 'styled-components'
import config from '../../config/fonts'

const Button = styled(DefaultButton)`
  font-size: ${config.paragraph};
`

export default Button
