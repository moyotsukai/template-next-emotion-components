import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div css={headerStyle}>
      <Link href="/" passHref>
        <a css={linkStyle}>
          Title
        </a>
      </Link>
    </div>
  )
}

const headerStyle = css`
  padding: 8px 10px 6px 10px;
  background-color: #fff;
  border-bottom: 1px solid rgb(220, 220, 220);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  display: flex;
  align-items: center;

   @media(min-width: 500px) {
    padding: 8px 20px 6px 20px;
  }
`

const linkStyle = css`
  color: #000;
  font-size: 20px;
`

export default Header