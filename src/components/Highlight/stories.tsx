import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

import HIGHLIGHT_MOCK from './mockData'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...HIGHLIGHT_MOCK }
} as Meta

export const Default: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/assets/img/red-dead-float.png'
}
