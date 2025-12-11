import React from "react";
import { Child } from "./Child";

export function Parrent () {


    const name = "sharon";
    const age = 20;

    return (
        <>
        <Child name={name} age={age}/>
        
        </>
    )
}