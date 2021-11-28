import { Container, TransationTypeContainer, RadioBox } from "./styles"
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg';
import { useState } from "react";

interface NewTrasactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){
    const [type, setType] = useState('deposit');

    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

            <button type="button" onClick={onRequestClose} className="React-modal-close">
                <img src={CloseImg} alt="fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text"
                    placeholder="Titulo"
                 />
                 <input type="number"
                    placeholder="Valor"
                 />

                <TransationTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('withdraw');}}
                        isActive={type === 'withdraw'}

                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransationTypeContainer>

                 <input type="text"
                    placeholder="Categoria"
                 />
                 <button type="submit">Cadastrar</button>
            </Container>
        </Modal>

    )
}