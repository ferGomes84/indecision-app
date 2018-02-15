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


