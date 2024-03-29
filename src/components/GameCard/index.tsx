import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as Styled from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void

  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary'
}: GameCardProps) => (
  <Styled.Container>
    {ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <Styled.ImageBox>
      <img src={img} alt={title} />
    </Styled.ImageBox>

    <Styled.Content>
      <Styled.Info>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Developer>{developer}</Styled.Developer>
      </Styled.Info>

      <Styled.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </Styled.FavButton>

      <Styled.BuyBox>
        {!!promotionalPrice && (
          <Styled.Price isPromotional>{price}</Styled.Price>
        )}
        <Styled.Price>{promotionalPrice || price}</Styled.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </Styled.BuyBox>
    </Styled.Content>
  </Styled.Container>
)

export default GameCard
