//crie uma função que receba o array [alunos] e um número que irá representar a média final
//percorra  array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final.
//utilize a técnica object destructuring para manipular as propriedades desejadas de cada aluno.

const alunos = [
    {nome:'João',nota:5,turma:'1b'},
    {nome:'sofia',nota:9,turma:'1b'},
    {nome:'paulo',nota:6,turma:'2c'},
    {nome:'miguel',nota:3,turma:'2c'}
    ]

function verAprovados(array,media){
    let aprovados=[];


    //método com object destructuring
    for (let i=0;i<array.length;i++){
    const {nota,nome}=array[i]
        if(nota >=media){
        aprovados.push(nome);
        }
    }


    //método sem object destructuring
    for (let i=0;i<array.length;i++){
        if(array[i].nota >=media){
            aprovados.push(array[i].nome);
        }
    }
    return aprovados;

}
console.log(verAprovados(alunos,5)) //vai retornar um array com nomes repetidos ja que estamos fazendo a mesma coisa duas vezes
