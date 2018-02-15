
//CLASSES E COMPONENTES//
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
    }
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
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]
            };
        });
    }
    // this.setState(() =>({options: []})); --> É A MESMA COISA DO MÉTODO DE CIMA MAS MAIS CURTO
    //----//
    //METODO PARA LIMPAR CADA ELEMENTO DO ARRAY
    handleDeleteOption(optionToRemove){
        this.setState((prevState) =>({
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }));
    }
    //----//
    // SELECIONA ALIATORIAMENTE UM ELEMENTO DO ARRAY DO ATRIBUTO OPTIONS QUE ENCONTRA DENTRO DO STATE, APÓS SELECIONADO É FEITO 1 ALERT COM A POSIÇÃO DO ARRAY SELECIONADA
    handlePick(){ 
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
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
    handleAddOption(option){
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
    //----//
    render(){
        const subtitle = "Put Your Life in the Hand of a Computer";
        return(
            <div>
                <Header subtitle ={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} /*  ESTA CONDIÇÃO VERIFICA SE EXITE ELEMENTOS NO ARRAY, CASO NÃO EXISTA ESTE FICARÁ DESABILITADO*/
                    handlePick={this.handlePick} /*QUANDO O ARRAY TIVER ELEMENTOS, ENTÃO O BOTAO ACTION FICA ACTIVO E FAZ A SELEÇÃO ALIATORIA DOS ELEMENTOS DO ARRAY */ 
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}
const Header = ((props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
});

//DEFAULT PROPS//

Header.defaultProps = {

    title: "Indecion"
}
//----//
/*
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}*/
//EXEMPLO DE STATE FUNCIONAL COMPONENT
const Action = ((props)=> {
    return(
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What Should I Do??
            </button>
        </div>
    );
});
/*
class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>
                    What Should I Do??
                </button>
            </div>
        );
    }
}
*/
const Options = ((props) =>{
    return(
        //MÉTODO PARA IMPRIMIR OS ELEMENTOS DO ARRAY DENTRO DE UM COMPONENTE//
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((options) =>(
                <Option  
                    key={options} 
                    optionText={options} 
                    handleDeleteOption = {props.handleDeleteOption}    
                    />
                ))
            }
        </div>
        //----//
    );
});
/*
class Options extends React.Component{
    render(){
        return (
            //MÉTODO PARA IMPRIMIR OS ELEMENTOS DO ARRAY DENTRO DE UM COMPONENTE//
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((options) =><Option  key={options} optionText={options} />)}
            </div>
            //----//
        );
    }
}
*/
const Option = ((props)=> {
    return(
        <div>
            {props.optionText}
            <button onClick={(e) =>{
                props.handleDeleteOption(props.optionText);//NESTA PARTE É IVOCADO O MÉTODO QUE RECEBE COM ARGUMENTO O ELEMENTO DO ARRAY
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
//RECEBIMENTO DE DADOS INSERIDOS ATRAVÉS DE FORMULÁRIO
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.state = {/* NA CLASS ADDOPTION É CRIADO UMA OUTRA PROPRIEDADE QUE RECEBERÁ O RESULTADO DO CONTROLO DO MÉTODO */ 
            error: undefined
        };
    }
    handleAddOption(e){
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
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit</button>
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//----//
