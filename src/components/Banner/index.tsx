import Button from 'components/Button'
import * as Styled from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  title,
  subtitle,
  img,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <Styled.Container>
    <Styled.Image src={img} role="img" aria-label={title} />

    <Styled.Caption>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Styled.Caption>
  </Styled.Container>
)

export default Banner
