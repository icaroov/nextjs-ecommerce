import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '1.6rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the button with full width version', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
