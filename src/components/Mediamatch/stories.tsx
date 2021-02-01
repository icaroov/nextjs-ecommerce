import { Story, Meta } from '@storybook/react/types-6-0'
import Mediamatch from '.'

export default {
  title: 'Mediamatch',
  component: Mediamatch
} as Meta

export const Desktop: Story = () => (
  <Mediamatch greaterThan="medium">Only on Desktop</Mediamatch>
)

export const Mobile: Story = () => (
  <Mediamatch lessThan="medium">Only on Mobile</Mediamatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
