import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { RibbonProps, RibbonColors } from '.'

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    right: -2rem;

    padding: 0 ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    right: -1.5rem;

    padding: 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Container = styled.div<RibbonProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};

    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: '';
      position: absolute;

      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-bottom-width: 1rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    ${!!color && containerModifiers.color(theme, color)};
    ${!!size && containerModifiers[size](theme)};
  `}
`
