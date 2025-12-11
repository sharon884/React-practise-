import React from "react";
import { useState } from "react";
import { Child } from "./Child";

export function Parrent () {


    const propfromChild = ( prop )=> {
                  
        setAge(prop)  
    };
const [ age, setAge ] = useState(0);
const [ name, SetName  ] = useState("sharon");
    return (
        <>
        <Child prop={name}  fuc={propfromChild}/>
        <h2>{age}</h2>
        </>
    )
};

