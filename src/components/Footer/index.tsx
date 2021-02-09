import Link from 'next/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

import * as Styled from './styles'

const Footer = () => (
  <Styled.Container>
    <Logo color="black" />
    <Styled.Content>
      <Styled.Column>
        <Heading lineBottom color="black" lineColor="secondary" size="small">
          Contact
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.gg</a>
        <a href="#">(99) 9999-9999</a>
      </Styled.Column>

      <Styled.Column>
        <Heading lineBottom color="black" lineColor="secondary" size="small">
          Follow Us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </Styled.Column>

      <Styled.Column>
        <Heading lineBottom color="black" lineColor="secondary" size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </Styled.Column>

      <Styled.Column aria-labelledby="footer-contact">
        <Heading lineBottom color="black" lineColor="secondary" size="small">
          Location
        </Heading>
        <span>Rua 29 de abril</span>
        <span>527 - 8998980</span>
        <span>São Paulo, Brasil</span>
      </Styled.Column>
    </Styled.Content>

    <Styled.Copyright>Won Games 2020 © All rights reserved.</Styled.Copyright>
  </Styled.Container>
)

export default Footer
