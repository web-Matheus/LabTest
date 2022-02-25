import React, { useEffect, useState } from "react";
import "./Count.styles.css"
const inicalState = 1500 
function Count() {

    const [Seconds,setSeconds] = useState(inicalState)
    useEffect(()=>{
        setTimeout(() => {
            setSeconds(state=>state-1)
        }, 1000);
    },[Seconds])

    const minutes = Math.floor(Seconds / 60)
    const second = Seconds % 60;
  return(
    <div>
         <span>{minutes}</span>
         <span>:</span>
         <span>{second}</span>
        <progress value={minutes} max={25}></progress>
    </div>
    );
}

export default Count;
