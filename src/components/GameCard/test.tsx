import { screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Shadow Lands',
  developer: 'Blizzard Entertainment',
  img: 'https://t2.tudocdn.net/501866?w=1200',
  price: 'R$ 200,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label by default', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).toHaveStyle({
      'background-color': theme.colors.secondary
    })

    expect(price).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 99,00" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through',
      color: theme.colors.gray
    })

    const promotionalPrice = screen.getByText('R$ 99,00')

    expect(promotionalPrice).toHaveStyle({
      'background-color': theme.colors.secondary
    })

    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
