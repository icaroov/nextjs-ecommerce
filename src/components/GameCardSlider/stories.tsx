import { Story, Meta } from '@storybook/react/types-6-0'

import { GameCardProps } from 'components/GameCard'
import items from './mockData'

import GameCardSlider from '.'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
