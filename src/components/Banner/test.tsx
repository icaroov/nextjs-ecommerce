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

    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: props.subtitle
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: props.buttonLabel
      })
    ).toHaveAttribute('href', props.buttonLink)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
