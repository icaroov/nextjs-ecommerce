import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import items from './mockData'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render 4 cards on slider as default', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render left and right arrows', () => {
    renderWithTheme(<GameCardSlider items={items} />)

    expect(screen.getByLabelText(/previous games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next games/i)).toBeInTheDocument()
  })

  it('should render the arrow with black color by default', () => {
    renderWithTheme(<GameCardSlider items={items} />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#030517'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render the arrow with white color', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
