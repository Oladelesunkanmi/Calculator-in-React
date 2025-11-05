import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);


    return(
        <div className="counter-container">
            <h1 className="count-display">{count}</h1>
            <button className="counter-button" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="counter-button"  onClick={()=>setCount(0)}>Reset</button>
            <button className="counter-button" onClick={()=>setCount(count-1)}>Decrement</button>

        </div>
    );
}
export default Counter