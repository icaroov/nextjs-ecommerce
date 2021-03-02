import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

export const images = {
  image1:
    'https://res.cloudinary.com/ddi5agea1/image/upload/v1614719459/wow2_xrzela.jpg',
  image2:
    'https://res.cloudinary.com/ddi5agea1/image/upload/v1614719458/wow1_eclejo.jpg',
  image3:
    'https://res.cloudinary.com/ddi5agea1/image/upload/v1614719458/wow3_z4fkd4.jpg'
}

export const items = [
  {
    img: images.image1,
    title: 'World of Warcraft 1',
    subtitle: '<p>Play the new <strong>expansion</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/wow',
    ribbon: 'Bestselling'
  },
  {
    img: images.image2,
    title: 'World of Warcraft 2',
    subtitle: '<p>Play the new <strong>expansion</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/wow'
  },
  {
    img: images.image3,
    title: 'World of Warcraft 3',
    subtitle: '<p>Play the new <strong>expansion</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/wow'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
