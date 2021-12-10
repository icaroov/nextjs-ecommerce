import * as Styled from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <Styled.Container>
    <Styled.Input id={labelFor} type="checkbox" />
    {!!label && (
      <Styled.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </Styled.Label>
    )}
  </Styled.Container>
)

export default Checkbox
