import React from 'react'
import { css } from '@emotion/react'
import { textColor } from '../../styles/colors'
import { breakpoints } from '../../styles/constants'

type Props = {
  children?: React.ReactNode
}

const PageTitle: React.FC<Props> = (props) => {
  return (
    <h1 css={titleStyle}>
      {props.children}
    </h1>
  )
}

const titleStyle = css`
  text-align: center;
  font-size: 21px;
  color: ${textColor};
  margin: 20px 0;
  line-height: 1.7;
  @media(min-width: ${breakpoints.desktop}) {
    font-size: 23px;
  }
`

export default PageTitle