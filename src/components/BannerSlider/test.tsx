import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import { items } from './stories'

import BannerSlider from '.'

describe('<BannerSlider />', () => {
  it('should render the vertical slide', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)

    expect(
      screen.getByRole('heading', {
        name: /world of warcraft 1/i,
        hidden: false
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /world of warcraft 2/i,
        hidden: true
      })
    ).toBeInTheDocument()
  })

  it('should render the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
    expect(container.querySelector('.slick-dots')).toHaveStyle({
      display: 'block'
    })
  })
})
