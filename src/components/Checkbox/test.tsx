import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the Checkbox with a label', () => {
    renderWithTheme(<Checkbox label="label" labelFor="action" />)

    // get input by role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // get input by associate label
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()

    // get input by text
    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'action')
  })

  it('should render without a label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', '')
  })

  it('should render with a black label', () => {
    renderWithTheme(
      <Checkbox label="label" labelFor="action" labelColor="black" />
    )

    expect(screen.getByText('label')).toHaveStyle({
      color: theme.colors.black
    })
  })
})
