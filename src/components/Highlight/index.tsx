import Button from 'components/Button'
import * as Styled from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignLeft?: boolean
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignLeft = false
}: HighlightProps) => (
  <Styled.Container backgroundImage={backgroundImage} alignLeft={alignLeft}>
    {!!floatImage && <Styled.FloatImage src={floatImage} alt={title} />}
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Styled.Content>
  </Styled.Container>
)

export default Highlight
