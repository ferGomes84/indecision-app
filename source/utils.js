console.log('utils is here')

const add = (a, b) => a + b;
const somma = ((a) => {

    return a + a;
})
const adulto = (a) => a > 18 ? 'ÉS ADULTO' : 'NÃO ÉS ADULTO'; 
const pagasCopo = (dinheiro) => dinheiro? 'Pagas um copo' : 'Pago eu';
//export { somma, add } --> FAZ A MESMA COISA QUE EM CIMA 


export default (idade) => idade > 65? 'sénior' : 'Ainda não o é sénior';

export{somma, add, adulto, pagasCopo}
    


