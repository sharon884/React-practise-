import React from "react";
import { useState } from "react";
import { Child } from "./Child";

export function Parrent () {

const [ name, SetName  ] = useState("sharon");
    return (
        <>
        <Child prop={name}/>
        </>
    )
};

