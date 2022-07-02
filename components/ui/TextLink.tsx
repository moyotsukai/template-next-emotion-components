import { css } from '@emotion/react'
import React from 'react'
import Link from 'next/link'
import { primaryColor, textColor } from '../../styles/colors'
import OpenInNewIcon from '../icons/OpenInNewIcon'

type Props = {
  href: string
  children: React.ReactNode
}

const TextLink: React.FC<Props> = (props) => {
  if (props.href.startsWith("/")) {
    return (
      <Link href={props.href} passHref>
        <a css={linkStyle}>
          {props.children}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={props.href} passHref>
        <a target="_blank" rel="noopener noreferrer" css={linkStyle}>
          {props.children}
          <OpenInNewIcon size={16} />
        </a>
      </Link>
    )
  }
}

const linkStyle = css`
  color: currentColor;
  text-decoration: underline;
  &:hover {
    color: ${primaryColor};
  }
`

export default TextLink