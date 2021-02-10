import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  title: 'World of Warcraft',
  subtitle: 'Play the new expansion right now!',
  buttonLabel: 'Buy now',
  buttonLink: '/games/world-of-warcraft',
  img:
    'https://sm.ign.com/ign_br/screenshot/default/world-of-warcraft-classic-onyxia_y46q.jpg'
}

describe('<Banner />', () => {
  it('should render the banner correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://sm.ign.com/ign_br/screenshot/default/world-of-warcraft-classic-onyxia_y46q.jpg'
    )

    expect(
      screen.getByRole('heading', { name: /world of warcraft/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Play the new expansion right now!/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /buy now/i
      })
    ).toHaveAttribute('href', '/games/world-of-warcraft')

    expect(container.firstChild).toMatchSnapshot()
  })
})
