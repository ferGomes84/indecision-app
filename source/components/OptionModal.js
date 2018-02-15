import React from 'react';
import Modal from 'react-modal';

//STATELESS COMPONENT
const OptionModal  = (props) => (
   <Modal
   className="modal"
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleClearSelectedOption}//PERMITE QUE FECHE O MODAL SEM CARREGAR OBRIGATORIAMENTE NO BOTÃO DE OKAY, CARREGANDO SÓ FORA DO MODAL
    contentLabel = "Selected Option"
   >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p> /*CASO EXISTA OPÇÃO NO SELECTEDOPTION ESTE O MOSTRARÁ AQUI*/}
    <button
        className="button"
        onClick={props.handleClearSelectedOption} //É REFERENCIADO O MÉTODO CRIADO NO INDECISION APP QUE FAZ COM QUE LIMPE O SELECTEDOPTION E FECHE O MODAL
    >Okay</button>
   </Modal>
);
//----//
export default OptionModal;