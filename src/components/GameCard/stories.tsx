import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Shadow Lands',
    developer: 'Blizzard Entertainment',
    img: 'https://t2.tudocdn.net/501866?w=1200',
    price: 'R$ 300,00',
    promotionalPrice: 'R$ 99,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)
