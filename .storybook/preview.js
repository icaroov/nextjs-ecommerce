import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme} >
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
