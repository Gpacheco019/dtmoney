import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'

interface HeaderProps {
  onNewTransactionOpenModal: () => void;
}

export function Header({ onNewTransactionOpenModal }: HeaderProps) {  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onNewTransactionOpenModal}>
          Nova trasação
        </button>
        
      </Content>
    </Container>
  )
}