import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mockData'
import gamesMock from 'components/GameCardSlider/mockData'
import highLightMock from 'components/Highlight/mockData'

const Index = (props: HomeTemplateProps) => {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highLightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highLightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highLightMock
    }
  }
}

export default Index
