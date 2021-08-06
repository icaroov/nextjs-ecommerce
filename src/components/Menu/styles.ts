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
    align-items: center;

    div:not(:first-child) {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    margin: 0.3rem ${theme.spacings.small} 0;
    text-align: center;
    text-decoration: none;

    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};

    &:hover {
      &::after {
        content: '';
        display: block;
        position: absolute;

        height: 0.3rem;
        background-color: ${theme.colors.primary};

        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type FullMenuProps = {
  isOpen: boolean
}

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    z-index: ${theme.layers.menu};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    height: 100vh;
    overflow: hidden;

    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};

    background: ${theme.colors.white};

    > svg {
      position: absolute;
      top: 0;
      right: 0;

      width: 2.4rem;
      height: 2.4rem;

      margin: ${theme.spacings.xsmall};

      cursor: pointer;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      flex: 1;
    }

    ${MenuLink} {
      margin-bottom: ${theme.spacings.small};

      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
