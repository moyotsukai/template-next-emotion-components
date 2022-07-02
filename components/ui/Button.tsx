import React from 'react'
import { css } from '@emotion/react'
import { primaryColor, primaryHeighlightColor, primaryShadowColor } from '../../styles/colors'
import { motion } from 'framer-motion'

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  children: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      css={buttonStyle}
    >
      {props.children}
    </motion.button>
  )
}

const buttonStyle = css`
  min-width: 95px;
  min-height: 42px;
  background-color: ${primaryColor};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 2px 3px 0 ${primaryShadowColor};
  &:hover {
    background-color: ${primaryHeighlightColor};
    box-shadow:  0 6px 9px 0 ${primaryShadowColor}
  }
  &:focus {
    outline: none;
  }
`

export default Button