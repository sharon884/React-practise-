import React from "react";
import { useState } from "react";




 export function Counter ()  {

    const [ count , setCount ] = useState(0);


    const increment = () => {
        setCount((prev) => prev + 1);
    };


    const decrement = () => {
        setCount((prev) => prev -1) ;
    };

return (
    <>
     
     <h1>{count}</h1>
     <button onClick={()=> increment()}>increment</button>
     <button onClick={()=> decrement()}>decrement</button>
    
    </>
)

}


