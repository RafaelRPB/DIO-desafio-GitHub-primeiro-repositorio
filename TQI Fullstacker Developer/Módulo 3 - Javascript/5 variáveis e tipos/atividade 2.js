/*
troque todos os elementos pares e diferentes de 0 de um array pelo número 0, e se o array for vazio,
retornar -1
*/

function trocarpor0(array) {
    if(!array) return -1;       //verifica se o input é array.
    if(!array.length) return -1; 
    
    for(let i = 0;i < array.length; i++){
        if (array[i] === 0){                                 //verifica se o numero ja é zero.
            console.log("voce ja é 0.")
        } else if (array[i] % 2 === 0){                      //verifica se o numero é divisivel por 2.
            console.log(`substituindo ${array[i]} por 0...`) 
            array[i]=0;                                      //troca o valor por 0.
        }
    }
    return array;
}

let arr = [0, 1, 3, 4, 6, 80, 33, 23, 5];
console.log(trocarpor0(arr));

