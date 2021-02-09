import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import Mediamatch from 'components/Mediamatch'
import Button from 'components/Button'

import * as Styled from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styled.Container>
      <Mediamatch lessThan="medium">
        <Styled.IconContainer onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </Styled.IconContainer>
      </Mediamatch>

      <Styled.LogoContainer>
        <Logo hideOnMobile />
      </Styled.LogoContainer>

      <Mediamatch greaterThan="medium">
        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explore</Styled.MenuLink>
        </Styled.MenuNav>
      </Mediamatch>

      <Styled.MenuGroup>
        <Styled.IconContainer>
          <SearchIcon aria-label="Search" />
        </Styled.IconContainer>

        <Styled.IconContainer>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </Styled.IconContainer>
        {!username && (
          <Mediamatch greaterThan="medium">
            <Button>Sign in</Button>
          </Mediamatch>
        )}
      </Styled.MenuGroup>

      <Styled.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explore</Styled.MenuLink>

          {!!username && (
            <>
              <Styled.MenuLink href="#">My account</Styled.MenuLink>
              <Styled.MenuLink href="#">Wishlist</Styled.MenuLink>
            </>
          )}
        </Styled.MenuNav>

        {!username && (
          <Styled.RegisterBox>
            <Button fullWidth size="large">
              Login
            </Button>
            <span>or</span>
            <Styled.CreateAccount href="#" title="Sign Up">
              Sign Up
            </Styled.CreateAccount>
          </Styled.RegisterBox>
        )}
      </Styled.FullMenu>
    </Styled.Container>
  )
}

export default Menu
