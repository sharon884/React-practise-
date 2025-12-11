import React from "react";
import { useRef } from "react";
import { useState } from "react";

export function Uncontrolled () {

    let inputRef = useRef();
    const [ input , setInput ] = useState("");

    const submit = () => {
        setInput(inputRef.current.value);
         inputRef.current.value = "";
         inputRef.current.focus();
    }

    return (
        <>
        <input type="text" placeholder="type something" ref={inputRef} />
        <button onClick={()=> submit()}>submit</button>
        <h1>{input}</h1>
        </>
    )
}