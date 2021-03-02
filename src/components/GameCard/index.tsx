import {
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'

import * as Styled from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice
}: GameCardProps) => (
  <Styled.Container>
    <Styled.ImageBox>
      <img src={img} alt={title} />
    </Styled.ImageBox>

    <Styled.Content>
      <Styled.Info>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Developer>{developer}</Styled.Developer>
      </Styled.Info>

      <Styled.FavButton role="button">
        <FavoriteBorder aria-label="Add to Wishlist" />
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
