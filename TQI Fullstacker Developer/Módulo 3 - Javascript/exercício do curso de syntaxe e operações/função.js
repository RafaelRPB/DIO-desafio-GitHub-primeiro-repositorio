function comparador (num1, num2){
    //catch de erros
    if (!num1 || !num2) return 'defina dois numeros.'; 
    if (num1 || num2 == !Number) return 'favor, escrever numeros.';


    const frase1 = criarfrase1(num1,num2); //numero igual ou não.
    const frase2 = criarfrase2(num1,num2); //soma dos numeros e comparação entre 10 e 20.

    return  frase1 + frase2;
}

function criarfrase1(num1,num2){
    let nãoiguais=' ';
    if(num1!==num2){nãoiguais="não";}
    return 'Os numeros ' + num1 + ' e ' + num2 + ' ' + nãoiguais + ' são iguais.'
}

function criarfrase2(num1,num2){
    const soma=num1+num2;
    const compara10=soma > 10;
    const compara20=soma < 20;
    let resultado10='menor';
    let resultado20='menor';

    if (compara10){resultado10='menor'};
    if (compara20){resultado20='maior'};

    return 'Sua soma é ' + soma + ', que é ' + resultado10 + ' que 10 e ' + resultado20 + ' que 20.';
}

console.log(comparador('fff',2)); //chama a função.
