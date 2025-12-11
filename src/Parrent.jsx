import React from "react";
import { useState } from "react";
import { Child } from "./Child";

export function Parrent() {


    const [age, setAge] = useState(0);
    const [name, SetName] = useState("sharon");
    const [dis, setDis] = useState("");


    const propfromChild = (prop) => {

        setAge(prop)
    };




    const submit = () => {
        setDis("");
    }


    return (
        <>
            <Child prop={name} fuc={propfromChild} />
            <h2>{age}</h2>

            <input type="text" placeholder="type something" value={dis} onChange={(e) => setDis(e.target.value)} />
            <h3>{dis}</h3>

            <button onClick={() => submit()}>submit</button>
        </>
    )
};

