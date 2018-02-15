import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

//CLASSES E COMPONENTES//
class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption: undefined //CONTROLA O SURGIMENTO DO MODAL
    };
    //TRANSFORM CLASS PROPERTIES//
    /*constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        /*this.state = {
            options : []
        };*/
    //}
    //LIFECYCLE METHODS//
    //JUNTA A INFORMAÇÃO//
    componentDidMount(){
        
        try{

            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }

        } catch(e){

        }
    }
    //----//
    //GUARDA A INFORMAÇÃO
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    //----//
    //----//
    // ESTE METODO O QUE FAZ É DE "LIMPAR" TODOS OS ELEMENTOS DO ARRAY E COLOCA-LOS A 0
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options:[]
            };
        });
    }
    // this.setState(() =>({options: []})); --> É A MESMA COISA DO MÉTODO DE CIMA MAS MAIS CURTO
    //----//
    //METODO PARA LIMPAR CADA ELEMENTO DO ARRAY
    handleDeleteOption = (optionToRemove) =>{
        this.setState((prevState) =>({
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }));
    }
    //----//
    // SELECIONA ALIATORIAMENTE UM ELEMENTO DO ARRAY DO ATRIBUTO OPTIONS QUE ENCONTRA DENTRO DO STATE, APÓS SELECIONADO É FEITO 1 ALERT COM A POSIÇÃO DO ARRAY SELECIONADA
    handlePick = () => { 
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option //GUARDA O VALOR DE OPTION NO SELECTEDOPTION
        }));
    }
    //----//
    /*
        ACRESCENTA AO ARRAY INFORMAÇÃO INSERIDA NA CAIXA DE TEXTO PELO UTLIZADOR
        MAS DENTRO DESTE MÉTODO ESTÃO CONTIDOS VÁRIAS CONDIÇÕES QUE CONTROLAM OS 
        DADOS INSERIDOS PELO UTILIZADOR, CASO O UTILIZADOR CARREGUE SÓ NO BOTÃO DE INSERIR
        O SISTEMA LHE DARÁ A INFORMAÇÃO QUE NADA FOI INSERIDO,
        CASO O UTILIZADOR INSIRA INFORMAÇÃO JÁ EXISTENTE O SISTEMA
        LHE DARÁ UMA INFORMAÇÃO DE QUE ESSA INFORMÇÃO JÁ EXISTE
        POR FINAL É FEITO TO O PROCESSO DE INSERÇÃO DE INFORMAÇÃO INSERIDA PELO UTILIZADOR

    */ 
    handleAddOption = (option) => {
        if(!option){
            return 'Enter value do add item';
        }
        else if(this.state.options.indexOf(option) > -1){

            return 'This option already exists';
        }
        /*this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
                /* PARA INSERIR DADOS NO ARRAY É USADO O MÉTODO CONTACT QUE RECEBE COMO ARGUMENTO O NOME DA VÁRIAVEL 
                    QUE RECEBERÁ OS DADOS, QUE NESTE CASO É O OPTION*/
           // };
        this.setState((prevState) =>({options: prevState.options.concat(option)}));
         /* PARA INSERIR DADOS NO ARRAY É USADO O MÉTODO CONTACT QUE RECEBE COMO ARGUMENTO O NOME DA VÁRIAVEL 
        QUE RECEBERÁ OS DADOS, QUE NESTE CASO É O OPTION*/
        //});

       
    }
    handleClearSelectedOption = () => {
        this.setState(()=>({
            selectedOption:undefined //LIMPA O VALOR DE SELECTEDOPTION AO CARREGAR NO BOTÃO DO MODAL E FECHA-O
        }));
    }
    //----//
    render(){
        const subtitle = "Put Your Life in the Hand of a Computer";
        return(
            <div>
                <Header subtitle ={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} /*  ESTA CONDIÇÃO VERIFICA SE EXITE ELEMENTOS NO ARRAY, CASO NÃO EXISTA ESTE FICARÁ DESABILITADO*/
                        handlePick={this.handlePick} /*QUANDO O ARRAY TIVER ELEMENTOS, ENTÃO O BOTAO ACTION FICA ACTIVO E FAZ A SELEÇÃO ALIATORIA DOS ELEMENTOS DO ARRAY */ 
                    />
                    <div className="widget">
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption} 
                    />
                    <AddOption 
                        handleAddOption = {this.handleAddOption}
                    />
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
            </div>
        );
    }
}

export default IndecisionApp;