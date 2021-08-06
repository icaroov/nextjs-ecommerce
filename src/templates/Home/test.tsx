import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mockData'
import gamesMock from 'components/GameCardSlider/mockData'
import highLightMock from 'components/Highlight/mockData'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highLightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highLightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highLightMock
}

import Home from '.'

describe('<Home />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render all sections in the Home Page', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })
})
