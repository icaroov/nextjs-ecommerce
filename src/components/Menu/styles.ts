import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.menu`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
  `}
`

export const LogoContainer = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
 `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    div:not(:first-child) {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

type FullMenuProps = {
  isOpen: boolean
}

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
  `}
`
