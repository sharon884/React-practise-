import React from "react";

export function Child ({prop, fuc}) {


    let name = prop;
  
    const age = 20;

    return (
        <>
        <h1>{name}</h1>
        <button onClick={() => fuc(age)}></button>
        </>
    )
}