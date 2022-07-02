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
    <React.Fragment>
      <Header />
      <div css={layoutStyle}>
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

const layoutStyle = css`
  background-color: ${backgroundColor};
  min-height: 100vh;
  padding: 0 10px;
`

export default Layout