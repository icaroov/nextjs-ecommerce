import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mockData'
import gamesMock from 'components/GameCardSlider/mockData'
import highLightMock from 'components/Highlight/mockData'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highLightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highLightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highLightMock
}

import Home from '.'

describe('<Home />', () => {
  it('should render the menu, footer and sections correctly', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // footer
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    // logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // sections
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
