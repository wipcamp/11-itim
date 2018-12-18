import React from 'react'
import styled from 'styled-components'

import config from '../../config/font'

const Headline = styled.h1`
  font-size: ${config.headline};
`

export const Subtitle = styled.h1`
  font-size: ${config.subtitle};
`

export const Paragraph = styled.h1`
  font-size: ${config.paragraph};
`

export const ParagraphBold = styled(Paragraph)`
  font-weight: bold;
`

export const Small = styled.h5`
  font-size: ${config.small};
`

export default Headline