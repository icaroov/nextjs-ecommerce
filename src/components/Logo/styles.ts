import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Container = styled.div<LogoProps>`
  ${({ theme, color = 'white' }) => css`
    color: ${theme.colors[color]};
  `}
`
