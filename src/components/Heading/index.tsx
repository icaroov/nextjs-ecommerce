import * as Styled from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'normal' | 'small'
  lineColor?: LineColors
  lineBottom?: boolean
  lineLeft?: boolean
}

const Heading = ({
  children,
  color = 'black',
  size = 'normal',
  lineColor = 'primary',
  lineBottom = false,
  lineLeft = false
}: HeadingProps) => (
  <Styled.Container
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </Styled.Container>
)

export default Heading
