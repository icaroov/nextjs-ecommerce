import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type ContainerProps = Pick<HighlightProps, 'backgroundImage'>

export const Container = styled.section<ContainerProps>`
  ${({ backgroundImage }) => css`
    position: relative;

    display: grid;
    height: 23rem;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      position: absolute;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    text-align: end;
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
      align-self: end;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
