import { Container, TransationTypeContainer, RadioBox } from "./styles"
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg';
import { FormEvent, useState } from "react";

interface NewTrasactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTrasactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        console.log({
            title,
            value,
            category,
            type
        })
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                 <input type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                 />

                <TransationTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('withdraw');}}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransationTypeContainer>

                 <input type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                 />
                 <button type="submit">Cadastrar</button>
            </Container>
        </Modal>

    )
}