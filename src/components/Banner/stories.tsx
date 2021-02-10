import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://sm.ign.com/ign_br/screenshot/default/world-of-warcraft-classic-onyxia_y46q.jpg',
    title: 'World of Warcraft',
    subtitle: '<p>Play the new <strong>expansion</strong> right now!',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/world-of-warcraft'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = args => <Banner {...args} />
