import {useState} from 'react'; //import que permite o uso de memória, retornando um valor guardado.
//com Hooks
function SmartCounter(){
    const [quantity, upQuantity] = useState(1);
    return (<>
        <h1>{quantity}</h1>
        <button onClick={()=> upQuantity(quantity +1)}>aumentar</button>
    </>)
}
export default SmartCounter;