import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
   
    
    const handleCount =()=>{
        const updateCount = count + 1;
        setCount(updateCount);
    }
    const handleJikir=()=>{
       
        setCount(count - 1);
    }
    return(
        <div>
            <h3>count number: {count}</h3>
            <button onClick={handleCount}>Increase</button>
            <button onClick={handleJikir}>Gota mar</button>
        </div>
        
    )
}
