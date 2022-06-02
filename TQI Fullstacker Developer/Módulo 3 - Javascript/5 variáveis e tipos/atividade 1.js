/*
nesse exercício precisamos fazer duas formas de provar se uma string é um palindromo ou não
*/

// primeira solução
function ispalindrome(string){
    if(!string) return "escreva uma string"; //verifica se é string.

    return string.split("").reverse().join("") === string; //transforma a string em array ao fazer split, separando-a em letras, usa o comando reverse para inverter a orden das letras, e depois join para transformar o array de volta em string.
}

//segunda solução
function ispalindrome2(string){
    if(!string) return "escreva uma string"; //verifica se é string.

    for(let i = 0; i < string.length / 2 ; i++){ //para index = 9, com i < tamanho da string/2, incrementar 1 até ser igual.
        if (string[i] !== string[string.length -1 - i]) {return false;} //se string[i] diferente da string original, retorna falso.
    }
    return true;
}
console.log(ispalindrome("abba"));
console.log(ispalindrome2("abba"));