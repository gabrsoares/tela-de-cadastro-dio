import React from 'react'
import { AlreadyAcountText, Container, Content, SubText, Text, Wrapper, Form } from './styles'
import Input from '../Input'
import { MdPerson, MdEmail, MdLock } from 'react-icons/md'
import Button from '../Button'

function Card() {
  return (
    <Wrapper>
      <Content>
        <Container>
            <Text>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Text>
        </Container>
        <Container>
          <Form>
            <Text>Comece agora grátis</Text>
            <SubText>Crie sua conta e make the change._</SubText>
            <Input icon={<MdPerson />} placeholder="Nome Completo" />
            <Input icon={<MdEmail />} placeholder="E-mail" />
            <Input icon={<MdLock />} placeholder="Senha" />
            <Button variant='secondary' title='Criar minha conta'></Button>
            <SubText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubText>
            <AlreadyAcountText>Já tenho conta <a href='#'>Fazer login</a></AlreadyAcountText>
          </Form>
        </Container>
      </Content>
    </Wrapper>
  )
}

export default Card
