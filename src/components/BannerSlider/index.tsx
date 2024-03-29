import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

import * as Styled from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <Styled.Container>
    <Slider settings={settings}>
      {items.map(item => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </Styled.Container>
)

export default BannerSlider
