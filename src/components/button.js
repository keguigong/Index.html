/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react"
import { Link } from "gatsby"
import { buttonStyles } from "../utils/styles"

const components = {
  link: Link,
  href: ({ children, ...rest }) => <a {...rest}>{children}</a>,
  button: ({ children, ...rest }) => <button {...rest}>{children}</button>,
}

const Button = ({
  to,
  overrideCSS,
  icon,
  children,
  tag,
  large,
  small,
  tiny,
  secondary,
  ondark,
  redBtn,
  ...rest
}) => {
  const Tag = components[tag || `link`]

  const props = {
    to: !tag ? to : undefined,
    href: tag === `href` ? to : undefined,
    ...rest,
  }

  const hhh = {
    "&&": {
      ...buttonStyles.default,
      ...overrideCSS,
      ...(secondary && buttonStyles.secondary),
      ...(large && buttonStyles.large),
      ...(small && buttonStyles.small),
      ...(tiny && buttonStyles.tiny),
      ...(ondark && buttonStyles.ondark),
      ...(redBtn && buttonStyles.redBtn),
    },
  }

  return (
    <Tag {...props} css={hhh}>
      {children}
      {icon && <>{icon}</>}
    </Tag>
  )
}

export default Button
