import React from 'react';

const Option = ((props)=> {
    return(
        <div className="option">
            <p className="option__text">{props.count} {props.optionText}</p>
            <button
            className="button button-link"
            onClick={(e) =>{
                props.handleDeleteOption(props.optionText);//NESTA PARTE É INVOCADO O MÉTODO QUE RECEBE COM ARGUMENTO O ELEMENTO DO ARRAY
            }}>
                Remove
            </button>
        </div>
        /*APÓS A IMPRESSÃO DE CADA ELEMENTO DO ARRAY NO ECRÃ, SURGE AO LADO O BOTÃO PARA APAGAR ESSE DETERMINADO ELEMENTO
         QUE RECEBE COMO REFERENCIA O MÉTODO CRIADO DENTRO DO INDECISION APP. PARA PODER APAGAR ESSE ELE ELEMENTO ESTE RECEBE
         O VALOR DO ELEMENTO DO ARRAY*/ 
    );
});
/*
class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}
*/

export default Option;