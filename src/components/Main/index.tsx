import * as Styled from './styles'
// import {} from './props'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, NextJS e Styled Components'
}) => {
  return (
    <Styled.Container>
      <Styled.Logo
        src="assets/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Illustration
        src="assets/img/illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </Styled.Container>
  )
}

export default Main
