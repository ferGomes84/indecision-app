import React from 'react';


//RECEBIMENTO DE DADOS INSERIDOS ATRAVÉS DE FORMULÁRIO
export default class AddOption extends React.Component{
    //FORMA RESUMIDA DE SE ACEDER AO CONSTRUTOR//
    state = {
        error: undefined
    }
    //----//
    /*constructor(props){
        super(props);
        this.handleAddOption= this.handleAddOption.bind(this);
       /* this.state = {/* NA CLASS ADDOPTION É CRIADO UMA OUTRA PROPRIEDADE QUE RECEBERÁ O RESULTADO DO CONTROLO DO MÉTODO  
            error: undefined
        }; FORMA NORMAL DE SE ACEDER AO CONSTRUTOR */
    //} 
    handleAddOption = (e) => {//FORMA RESUMIDA DE ACEDER AO CONSTRUTOR E FAZER BIND DO MÉTODO
        e.preventDefault();//PREVINE A INSERÇÃO DE LIXO CASO O UTILIZADOR NÃO INSIRA NADA E CARREGUE SÓ NO BOTÃO//
        const option = e.target.elements.option.value.trim();//VAI BUSCAR O VALOR DO ELEMENTO PELO NOME DO INPUT DO FORMULÁRIO
        const error = this.props.handleAddOption(option); 
        
        /*this.setState(() => {
            return{error}; // NÓ MÉTODO SETSTATE A PROPRIEDADE ERROR RECEBERÁ O VALOR DE ERROR ATRAVÉS DO CONTROLO FEITO NO MÉTODO handleAddOption(option)
        });*/
        this.setState(() =>({error}));// NÓ MÉTODO SETSTATE A PROPRIEDADE ERROR RECEBERÁ O VALOR DE ERROR ATRAVÉS DO CONTROLO FEITO NO MÉTODO handleAddOption(option)

        if(!error){
            e.target.elements.option.value = '';//LIMPA O CAMPO DO INPUT APÓS CARREGAR NO BOTÃO
        }
    }
    render(){
        return (
            <div>
                {this.state.error && (<p>{this.state.error}</p>) /* AQUI CASO A PROPRIEDADE ERROR CONTENHA VALOR ESTE SERÁ MOSTRADO DENTRO DA TAG P*/}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Submit</button>
                </form>
            </div>
        );
    }
}

//STATELESS FUNCTIONAL COMPONENT EXEMPLO: 
const Name = ((props) => {
    return (
        <div>
            <p>Nome: {props.name}</p>
            <p>Idade:{props.age} </p>
        </div>
    );
});
//----//