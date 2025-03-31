import { use, useState } from "react"
import IMT from "./IMT"
import Button from "./Buttton"


const AppMain = () =>{

  const [benchpress,setBenchpress] = useState('')
  const [repetition1,setRepetition1] = useState('')
  const [result111,setResult111] = useState('')
  
  const [name,setName] = useState('')
  // const [squats,setSquats] = useState('')
  // const [repetition2,setRepetition2] = useState('')
  // const [result222,setResult222] = useState('')

const benchpressHandler = (e) => {
   setBenchpress(e.target.value)
   console.log(benchpress)
}

const repetition1Handrer = (e) => {
  setRepetition1(e.target.value)
  console.log(repetition1)
}

const resultBenchpress =(user) => {
  user=name
  let pizda=`${name},Cегодня ты пожал ${benchpress}кг на ${repetition1} повторений.`
  
  return pizda
}

const ClickBenchpress = () => {
  setResult111(resultBenchpress())
}



    return (
        <>
          <IMT />
          <div>
            <h3>Моя тренировка(жим и присед)</h3>
            
            <p>Жим
            <input 
            type="text"
            placeholder="вес"
            onChange={benchpressHandler}
            value={benchpress}
            /></p>
            
            <p>Кол-во повторений
            <input 
            type="range"
            placeholder="вес"
            step='2'
            min='2'
            max='8'
            value={repetition1}
            onChange={repetition1Handrer}
            id="id_range" 
            oninput={()=>send_result.innerHTML=id_range.value}
            /></p>
            
            <p>Имя
            <input 
            type="text"
            placeholder="имя"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            /></p>
            <Button onTouch={ClickBenchpress}>Сохранить жим</Button>
           <h3>{result111}</h3>
          </div>
        </>
    )
}
export default AppMain