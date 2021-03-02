import SlickSlider, { Settings } from 'react-slick'

import * as Styled from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <Styled.Container>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </Styled.Container>
)

export default Slider
