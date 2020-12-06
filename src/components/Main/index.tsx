import * as S from './styles'

const Main = ({ title = 'React Avançado', description = 'TypeScript, ReactJS, NextJS e Styled Components' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo e React Avançado escrito ao lado." />
    <S.Title>React Avançado</S.Title>
    <S.Description>TypeScript, ReactJS e Styled Components</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="desenvolvedor de frente para um tela com código" />
  </S.Wrapper>
)

export default Main
