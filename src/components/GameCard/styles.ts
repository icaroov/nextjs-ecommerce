import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.article`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  width: 100%;
  height: 14rem;

  background: #f6f7f8;
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    position: absolute;

    top: -0.5rem;
    right: 0;

    color: ${theme.colors.primary};
    cursor: pointer;

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-top: ${theme.spacings.xxsmall};
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    margin-right: calc(${theme.spacings.xxsmall} / 2);
    padding: 0 ${theme.spacings.xxsmall};

    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
  `,
  promotional: (theme: DefaultTheme) => css`
    margin-right: ${theme.spacings.xsmall};

    color: ${theme.colors.gray};
    text-decoration: line-through;
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    align-items: center;
    height: 3rem;

    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}

    ${!isPromotional && priceModifiers.default(theme)};
    ${isPromotional && priceModifiers.promotional(theme)};
  `}
`
