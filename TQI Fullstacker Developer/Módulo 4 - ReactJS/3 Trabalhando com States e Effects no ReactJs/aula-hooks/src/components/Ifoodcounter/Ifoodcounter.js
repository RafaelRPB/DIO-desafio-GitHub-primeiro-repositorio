import React, {useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css';
//pequena observação é que isso esta incompleto, é apenas para estudo
export default function Ifoodcounter() {
    
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active')

    useEffect(()=>{
        document.getElementById("moeda").innerHTML=2 * value;
    },[value])


    function down(){
        if(value<=1){//change css if 0.
            setButtonStyle('counter-button-minus-desactive')
        }
        if(value>0){
            setValue(value-1);
        }        
    }
    function up(){ 
        setButtonStyle('counter-button-minus-active') //normalise css
        setValue(value+1);
    }

  return (
    <div className="counter-wrapper">
        <button className={buttonStyle} onClick={down}>
            -
        </button>
        <p>{value}</p>
        <button className='counter-button-plus-active' onClick={up}>
            +
        </button>
        <button id='moeda'>2</button>
    </div>
  )
}
