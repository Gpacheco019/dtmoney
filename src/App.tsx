import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTrasactionModal";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {  
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTrasactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onNewTransactionOpenModal={handleOpenNewTransactionModal}/>
      <Dashboard></Dashboard>

       <NewTransactionModal 
       isOpen={isNewTrasactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
        />
         
      <GlobalStyle></GlobalStyle>
    </ TransactionsProvider>
  );
}


