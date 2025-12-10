import React from "react";
import { useState } from "react";

export function Condition () {

const [ count , setCount ] = useState(1);

    return (
        <>

       { count <=1 ? <h1>count is greater</h1> : <h1> count is lesser </h1>} 


        </>
    )

}