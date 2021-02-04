import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'

import * as Styled from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styled.Container>
      <Styled.IconContainer onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </Styled.IconContainer>

      <Styled.LogoContainer>
        <Logo hideOnMobile />
      </Styled.LogoContainer>

      <Styled.MenuGroup>
        <Styled.IconContainer>
          <SearchIcon aria-label="Search" />
        </Styled.IconContainer>

        <Styled.IconContainer>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </Styled.IconContainer>
      </Styled.MenuGroup>

      <Styled.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </Styled.FullMenu>
    </Styled.Container>
  )
}

export default Menu
