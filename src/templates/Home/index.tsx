import {
  Container,
  Menu,
  Footer,
  Heading,
  BannerSlider,
  GameCardSlider,
  Highlight
} from 'components'

import { BannerProps, GameCardProps, HighlightProps } from 'types'

import * as Styled from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingHighlight,
  upcommingGames,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <Styled.SectionBanner>
        <BannerSlider items={banners} />
      </Styled.SectionBanner>
    </Container>

    <Styled.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </Styled.SectionNews>

    <Container>
      <Styled.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Styled.SectionMostPopular>
    </Container>

    <Container>
      <Styled.SectionUpcoming>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>

        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </Styled.SectionUpcoming>
    </Container>

    <Container>
      <Styled.SectionFreeGames>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>

        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Styled.SectionFreeGames>
    </Container>

    <Styled.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </Styled.SectionFooter>
  </section>
)

export default Home
