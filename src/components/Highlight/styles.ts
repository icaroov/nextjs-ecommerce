import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type ContainerProps = Pick<HighlightProps, 'backgroundImage'>

export const Container = styled.section<ContainerProps>`
  ${({ backgroundImage }) => css`
    position: relative;

    display: grid;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

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

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;

    max-width: 100%;
    max-height: 23rem;

    align-self: end;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
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
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
