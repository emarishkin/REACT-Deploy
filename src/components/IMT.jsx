import { useState } from "react"
import Button from "./Buttton"
import logo2 from '/111.webp'

const IMT = () => {

const [value1,setValue1] = useState('')
const [value2,setValue2] = useState('')
const [result,setResult] = useState('')



const onChangeHandle1 = (e) =>{
    setValue1(e.target.value) 
}

const onChangeHandle2 = (e) =>{
    setValue2(e.target.value)
}

const Calc = () =>{
    let imt = ((value2)/(value1*value1/100)*100).toFixed(1)
    return imt
}

const HandleClick = () => {
   setResult(Calc())
}

    return(
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',border:'2px solid black',width:400}}>
           <h3>Калькулятор индекса массы тела (ИМТ)</h3>
           <p>Ваш рост, в см . 
            <input 
            type="text"
            placeholder="Введи рост"
            value={value1}
            onChange={onChangeHandle1}
            /></p>
           <p>Ваш вес, в кг .  
            <input 
            type="text"
            placeholder="Введи вec"
            value={value2}
            onChange={onChangeHandle2}
            /></p>
           <Button onTouch={HandleClick}>Рассчитать</Button>
           <h3>Ваш индекс массы тела: {result}</h3> 
        </div>
        <div>
            <img style={{width:420,height:240}} src={logo2} alt="" />
        </div>
        </div>
    )
}

export default IMT