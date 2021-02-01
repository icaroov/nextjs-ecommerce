import * as Styled from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineBottom?: boolean
  lineLeft?: boolean
}

const Heading = ({
  children,
  color = 'black',
  lineBottom = false,
  lineLeft = false
}: HeadingProps) => (
  <Styled.Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </Styled.Container>
)

export default Heading
