//CLASSES EM REACT COM CONSTRUTOR E MÉTODOS

class Person {
    constructor(name = 'alguém'){
        this.name = name;
    }
    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }
}

const me = new Person('Fernando');
console.log(me.getGreeting());

const other = new Person ();

console.log(other.getGreeting());

//----//
//EXERCICIO//
class Pessoa {
    constructor(nome = 'Alguém', idade = 0){

        this.nome = nome;
        this.idade = idade;
    }
    dizOla(){
        return `Olá, chamo-me ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const ana = new Pessoa('Ana', 27);
console.log(ana.dizOla());

const coiso = new Pessoa();
console.log(coiso.dizOla());
//----//

//CLASSE ATRAVÉS DE HERANÇA
class Estudante extends Pessoa {
    constructor(nome, idade, matematica){
        super(nome, idade);
        this.matematica = matematica;
    }
    notaMat(){

        return `Chamo-me ${this.nome}, tenho ${this.idade} e tive ${this.matematica} a matemática`;
    }
}
const marta = new Estudante('Marta', 20, 18);
//alert(marta.notaMat());
//----//

//--OVERRIDE METHODS--//
class Estuda extends Pessoa{
    constructor(nome, idade, location){
        super(name, idade);
        this.location = location;
    }
    notaMat(){
        let nota = super.notaMat();
        if(this.location){
            nota += `e sou  do ${this.location}`;
        }
        return nota;
    }
}

const joao = new Estuda('João', 16, 'Fundão');
alert(joao.notaMat()); 
//----//