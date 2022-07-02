import React from 'react'
import { css } from '@emotion/react'

const Footer: React.FC = () => {
  const thisYear = 2022
  const year = new Date().getFullYear()
  const copyYear = year === thisYear ? thisYear.toString() : `${thisYear.toString()}-${year}`

  return (
    <footer css={footerStyle}>
      &copy; {copyYear} Shintaro Aoi
    </footer>
  )
}

const footerStyle = css`
  padding: 3px 0;
  background-color: #fff;
  text-align: center;
  font-size: 10pt;
  color: #999;
`

export default Footer