//Exercicio 1//
/*
    div
    h1 -> Menu Nome
    p -> Idade
    p -> Localidade
*/    
//DINAMICO ATRAVÉS DE VARIÁVEIS//
var username = 'Fernando';
var idade = 33;
var localidade = 'Fundão';
//----//
//DINAMICO ATRAVÉS DE OBJECTO//
var fernando = {

    idade: 33,
    sexo: "Masculino",
    altura: 164,
    peso: "65kg"
};
//----//
//CONDICIONAIS//
function disco (idade){
    if(idade >= 18){
        return <h4>Podes entrar na discoteca</h4>
    }
    else{
        return <h4>Ficas à porta</h4>    
    }
}
//----//
//OPERADOR TERNÁRIO//
function idade2(idade){
   return (idade >= 18)? <h4>Podes entrar na discoteca</h4> : <h4>Ficas à Porta</h4>;
}
//----//
//ARROW FUNCTION//
const firstName = (fullName) => fullName.split(' ')[0];
//----//
//ARROW FUNCTIONS WITH RETURN//
const getFirtstName = (firstName) => {
    return firstName.split(' ')[0];
}
//----//
var myInfo = (
    <div>
        <h1 align='center'>{username}</h1>
        <h2 align='center'>Idade -> {idade}</h2>
        <h3 align='center'>Localidade -> {localidade}</h3>
        <h4 align='center'>Idade Este Ano ->{idade + 1}</h4>
        <center>
            <table border="1px">
                <tbody>
                    <tr>
                        <th>Sexo: </th>
                        <td>{fernando.sexo}</td>
                    </tr>
                    <tr>
                        <th>Altura: </th>
                        <td>{fernando.altura}</td>
                    </tr>
                    <tr>
                        <th>Peso: </th>
                        <td>{fernando.peso}</td>
                    </tr>
                </tbody>
            </table>
            {idade2(fernando.idade)}
            <p>Tas em casa?  {(28 < 20)? "Tou aqui": "Não estou"}</p>
            {(fernando.idade > 18 && fernando.altura > 160) && <p>Altura:{fernando.altura}cm Idade:{fernando.idade} Podes entrar na carrousel</p>}
            <p>{firstName('Ana Rita')}</p>
            <p>{getFirtstName('Rita Maria')}</p>
        </center>
    </div>
);
//EXERCICIO 2//
/*
    CONDICIONAIS E OBJECTOS
*/
var appRoot = document.getElementById('app');
ReactDOM.render(myInfo, appRoot);

var template = (
    <div>
        <h1 align='center'>{app.title}</h1>
        <h2 align='center'>{app.subtitle}</h2>
        <h3 align='center'>{(app.options.length > 0) ? "Here your options" : "There's no options"}</h3>
    </div>);


    let count = 0;
const addOne = () => {
    count++;
    renderTemplateTwo();
};
//Exercicio//
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
}


const renderTemplateTwo = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(renderTemplateTwo, appRoot);
};
renderTemplateTwo();

//ACEDER AOS ITEMS DO ARRAY
{
    /*numbers.map((number) =>{
        return <p key={number}>Number: {number}</p>
    })*/
}
//----//


//JSX JavaScript XML

var app ={
    title:"Indecision App",
    subtitle: "Put your life in the ands of a computer",
    options: []
};

//RECEBE INFORMAÇÃO DO FORMULÁRIO ATRAVÉS DO ATRIBUTO ONSUBMIT
const onFormSubmit = (e) =>{

    e.preventDefault();
   const option = e.target.elements.option.value;//CAMPO DE INPUT 

   if(option){
       app.options.push(option);
       e.target.elements.option.value = '';
       render();
   }
};
//----//
//LIMPA OS VALORES DENTRO DO ARRAY//
const onRemoveAll = () =>{

    app.options = [];
    render();
};
//----//
//MÉTODO PARA NÚMEROS ALEATÓRIOS AO CLICAR NO BOTÃO//
const onMakeDecision = () =>{

    const randomNumber = Math.floor(Math.random() * app.options.length);//VEZES A DIMENSÃO DO ARRAY E ARREDONDA-SE POR DEFEITO ATRAVÉS DO MÉTODO MATH FLOOR
    const option = app.options[randomNumber];
    alert(option);
};

var appRoot = document.getElementById('app');
const numbers = [25, 30, 50];
const render = () =>{

    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'There is no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do??</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text"  name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();







