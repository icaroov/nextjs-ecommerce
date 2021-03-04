import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { GameCardSliderProps } from '.'

type ContainerProps = Pick<GameCardSliderProps, 'color'>

export const Container = styled.section<ContainerProps>`
  ${({ theme, color = 'black' }) => css`
    ${media.lessThan('huge')`
      overflow: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
      margin: 0 ${theme.spacings.xxsmall};
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }

      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      position: absolute;

      display: block;
      padding: 0;
      top: 50%;

      width: 2.5rem;
      height: 2.5rem;

      transform: translate(0, -50%);

      color: ${theme.colors[color]};
      cursor: pointer;
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
