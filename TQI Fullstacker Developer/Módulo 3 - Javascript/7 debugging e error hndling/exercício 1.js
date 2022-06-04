/*
nessa atividade devemos fazer com que uma função receba um array e retorne ele caso o seu tamanho 
corresponda ao número enviado como parâmetro da função, caso contrário, será enviado um erro.
-crie uma função que receba um array e um numero.
-se o array não for do tipo object, lance um erro do tipo typeError.
-se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo :RangeError.
-utilize a declaração try...catch
filtre as chamadas do catch por cada tipo de erro utilizando o operador instanceof
*/


function exercicio (array,numero){
    try{
        if (!array && !numero) throw new ReferenceError('envie os parâmetros requisitados.'); //se o parâmetro não for array ou número, joga erro.
    
        if (typeof array !== Object) throw new TypeError('array precisa ser do tipo object'); //se o array for diferente de objeto e o numero não for um numero, joga um erro.
        if (typeof numero !== Number) throw new TypeError('numero precisa ser do tipo Number');
    
        if (array.length !== numero) throw new RangeError('o tamanho da array não é compatível com o número') //se o tamanho da array não for igual ao numero, joga um erro.
       
        return array; //sucesso
    }catch (e){
        if (e instanceof ReferenceError){                   
            console.log('este erro é um ReferenceError!');
            console.log(e.name);
            console.log(e.message);
            console.log(e.stack);
        } else if (e instanceof TypeError){
            console.log('este erro é um TypeError!');
            console.log(e.name);
            console.log(e.message);
            console.log(e.stack);            
        } else if (e instanceof RangeError){
        console.log('este erro é um RangeError!');
        console.log(e.name);
        console.log(e.message);
        console.log(e.stack);
        } else console.log("ocorreu um erro que não foi esperado:" + e)
    }
    
}

exercicio([1,2,3],3);