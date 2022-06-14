//aqui simularemos um counter
//sem Hooks
function Counter(){
    let quantity = 10;
    function upQuantity(){
        quantity = quantity+1;
        document.getElementById("counterBox").innerHTML = quantity; //faz com que o valor na tela se atualize com o novo valor.
    }
    return(
        <> isso é um fragment, ele permite o reconhecimento pelo react de funções de mais de uma linha.
        <h1 id="counterBox">{quantity}</h1> 
        <button onClick={upQuantity}>Aumentar</button>
        </>    
    )
}
export default Counter;