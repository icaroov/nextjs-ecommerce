import * as Styled from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => (
  <Styled.Container color={color} size={size}>
    {children}
  </Styled.Container>
)

export default Ribbon
