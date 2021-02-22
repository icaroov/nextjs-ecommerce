import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: '/assets/img/red-dead-img.jpg',
    buttonLabel: 'Buy Now',
    buttonLink: '#'
  }
} as Meta

export const Default: Story<HighlightProps> = args => <Highlight {...args} />
