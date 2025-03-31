import { useState } from 'react'
import logo from '/logo.jpg'


const AppHeader = () => {

    const [now,setNow] = useState(new Date())
    setInterval(()=>setNow(new Date()),1000)

    return (
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 40px',borderBottom:'2px solid black',marginBottom:20}}>
        <div style={{display:'flex',alignItems:'center'}}>
            <img style={{width:228,height:124}} src={logo} alt="" />
            <h1>Программа</h1>
        </div>
        <span><a href="#">Прогресс</a></span>
        <span style={{fontSize:25}}>Время: {now.toLocaleTimeString()}</span>
      </div>
    )
}
export default AppHeader