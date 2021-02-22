import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'
import * as Styled from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/assets/img/red-dead-img.jpg',
  buttonLabel: 'Buy Now',
  buttonLink: '#'
}

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render the float image image', () => {
    renderWithTheme(<Highlight {...props} floatImage="float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(<Highlight {...props} alignLeft />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${Styled.Content}`
    })

    expect(container.firstChild).toHaveStyleRule('justify-self', 'end', {
      modifier: `${Styled.FloatImage}`
    })
  })
})
