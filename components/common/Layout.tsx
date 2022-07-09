import React from 'react'
import { css } from '@emotion/react'
import Header from './Header'
import Footer from './Footer'
import { backgroundColor } from '../../styles/colors'
import { pageContentMaxWidth } from '../../styles/constants'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div css={layoutStyle}>
      <Header />
      <div css={contentStyle}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

const layoutStyle = css`
  background-color: ${backgroundColor};
`

const contentStyle = css`
  padding: 0 12px;
  max-width: ${pageContentMaxWidth}px;
  min-height: 100vh;
  margin: 0 auto;
`

export default Layout