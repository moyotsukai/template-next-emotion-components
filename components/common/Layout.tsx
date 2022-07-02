import React from 'react'
import { css } from '@emotion/react'
import Header from './Header'
import Footer from './Footer'
import { backgroundColor } from '../../styles/colors'

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
  padding: 0 10px;
`

const contentStyle = css`
  min-height: 100vh;
`

export default Layout