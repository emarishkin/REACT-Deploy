import { useState } from "react"


const AppMain = () =>{

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



// if(result<=16){
//     slovo ='Выраженный дефицит массы тела'
// } else if(16<result<=18.5) {
//     slovo ='Недостаточная масса тела'
// } else if(18.5<result<=25) {
//     slovo ='Нормальная масса тела'
// } else if(25<=result<=30) {
//     slovo ='Избыточная масса тела (предожирение)'
// } else if(30.5<result<=35) {
//     slovo ='Ожирение 1-ой степени'
// } else if(35<result<=40) {
//     slovo ='Ожирение 2-ой степени'
// } else  {
//     slovo ='Ожирение 3-ой степени'
// }
   


    return (
        
        <div>
           <h3>Калькулятор индекса массы тела (ИМТ)</h3>
           <p>Ваш рост, в см. 
            <input 
            type="text"
            placeholder="Введи рост"
            value={value1}
            onChange={onChangeHandle1}
            /></p>
           <p>Ваш вес, в кг. 
            <input 
            type="text"
            placeholder="Введи вec"
            value={value2}
            onChange={onChangeHandle2}
            /></p>
           <button onClick={HandleClick}>Рассчитать</button>
           <h3>Ваш индекс массы тела: {result}</h3>
          
           
        </div>
        
    )
}
export default AppMain