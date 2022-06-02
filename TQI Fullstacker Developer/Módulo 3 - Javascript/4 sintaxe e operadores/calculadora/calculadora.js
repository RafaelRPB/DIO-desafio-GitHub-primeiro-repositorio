function calculadora(){ //prompt para o usuário escolher um número.
    const operação =Number(prompt('escolha uma operação:\n 1 - soma(+)\n 2 - subtração(-)\n3 - multiplicação(*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'))

    //catch de erro no prompt inicial
if (!operação|| operação >= 7){
    alert('erro - operação invalida!');
    calculadora();
} else{

    //variaveis
var n1=Number(prompt('insira o primeiro valor: '));
var n2=Number(prompt('insira um segundo valor: '));
var resultado; 

if(!n1 || !n2){
    alert('erro - numeros invalidos')
}else{
/*//if nest de resposta
if (operação ==1){soma();} 
else if (operação==2){subtração();}
else if (operação==3){multiplicação();}
else if (operação==4){divisãoreal();}
else if (operação==5){divisãointeira();}
else if (operação==6){potencialização();}
*/

//modo switch/case
switch(operação){
    case 1:soma();break;
    case 2:subtração();break;
    case 3:multiplicação();break;
    case 4:divisãoreal();break;
    case 5:divisãointeira();break;
    case 6:potencialização();break;
}


//funções
function soma(){resultado=n1+n2;alert(n1 + ' + ' + n2 + ' = ' + resultado + '.')} //o ${variavel} permite que o programa escreva o valor da variável no local, POREM, por algum motivo não funcionou, então fiz o caminho menos polido...
function subtração(){resultado=n1-n2;alert(n1 + ' - ' + n2 + ' = ' + resultado + '.')}
function multiplicação(){resultado=n1*n2;alert(n1 + ' * ' + n2 + ' = ' + resultado + '.')}
function divisãoreal(){resultado=n1/n2;alert(n1 + ' / ' + n2 + ' = ' + resultado + '.')}
function divisãointeira(){resultado=n1%n2;alert('O resto da divisão entre '+ n1 +' e ' + n2 + ' é igual ao ' + resultado + '.')}
function potencialização(){resultado=n1**n2;alert(n1 + 'a potencia de ' + n2 + 'é igual a ' + resultado + '.')}
} 
}


    }
calculadora();

//usar calculadora?
const retry = Number(prompt('deseja fazer uso da calculadora?\n1 - sim\n2 - não'))
if(retry==1){calculadora()};