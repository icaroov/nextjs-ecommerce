import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import HIGHLIGHT_MOCK from './mockData'

import Highlight from '.'
import * as Styled from './styles'

describe('<Highlight />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Highlight {...HIGHLIGHT_MOCK} />)

    expect(
      screen.getByRole('heading', { name: /read dead is back/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /come see john's new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...HIGHLIGHT_MOCK} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${HIGHLIGHT_MOCK.backgroundImage})`
    })
  })

  it('should render the float image image', () => {
    renderWithTheme(
      <Highlight {...HIGHLIGHT_MOCK} floatImage="float-image.png" />
    )

    expect(
      screen.getByRole('img', { name: HIGHLIGHT_MOCK.title })
    ).toHaveAttribute('src', 'float-image.png')
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...HIGHLIGHT_MOCK} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...HIGHLIGHT_MOCK} alignLeft />
    )

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
