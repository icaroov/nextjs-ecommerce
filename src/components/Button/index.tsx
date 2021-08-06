import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as Styled from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) => (
  <Styled.Container
    size={size}
    fullWidth={fullWidth}
    minimal={minimal}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Styled.Container>
)

export default Button
