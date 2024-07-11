import React, { useState } from 'react'
import { Data } from './Data'


const Quiz = () => {
    const [data, setData] = useState(Data);
    const [index,setindex] =useState(0);
    const [score,setscore] =useState(0)
    console.log(data);
    const next=()=>{
      if (index < data.length-1) {
        setindex(index+1) 
      }else{
       document.querySelector(".score").innerHTML=`<p>Your Score : ${score}/5</p>`

       document.querySelector(".quiz").innerHTML=""

       let nextbtn = document.querySelector("#next")
       nextbtn.innerHTML="Play again"

       nextbtn.classList.add("reset")
       const reset =document.querySelector(".reset");

       reset.addEventListener("click",()=>{
        window.location.reload()
       })


      }
      const checked = document.querySelectorAll(".checkedValue");
      checked.forEach((curval)=>{
          curval.checked=false
      })

    }

   


    const handleInput= (event)=>{
        let choosevalue =event.target.value;
        console.log(choosevalue)
        if (choosevalue === data[index].ans) {
            setscore(score+1)
           
            
        }
    }
    console.log(score)



  return (
    
   <div className="container">
    <div className="quiz">
        <h1>Q:{data[index].q}</h1>
    </div>

    <div className="option">
        <input name='ok' type="radio" onChange={handleInput} className='checkedValue' value={data[index].a}/>
        <p>A: {data[index].a}</p>
    </div>


    
    <div className="option">
        <input name='ok' type="radio" onChange={handleInput} className='checkedValue' value={data[index].b}/>
        <p>b: {data[index].b}</p>
    </div>

    
    <div className="option">
        <input name='ok' type="radio" onChange={handleInput} className='checkedValue' value={data[index].c}/>
        <p>c: {data[index].c}</p>
    </div>

    
    <div className="option">
        <input name='ok' type="radio" onChange={handleInput} className='checkedValue' value={data[index].d}/>
        <p>d: {data[index].d}</p>
    </div>

    <div className='btns'>
        <button id='next' onClick={next}>Next</button>
       </div>

       <div className="score"></div>

   </div>
   
   
  )
}

export default Quiz