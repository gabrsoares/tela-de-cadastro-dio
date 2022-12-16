import React from 'react'
import logoImg from '../../assets/logo-dio.png'
import Button from '../Button'
import { Container, MenuHome, Row, Wrapper } from './styles'

function Header() {
  return (
    <Wrapper>
    <Container>
        <Row>
            <img src={logoImg} alt='Logo da DIO'></img>
        </Row>
        <Row>
            <MenuHome href='#'>Home</MenuHome>
            <Button variant='margin' title='Entrar' />
            <Button variant='primary' title='Cadastrar' />
        </Row>
    </Container>
    </Wrapper>
  )
}

export default Header
