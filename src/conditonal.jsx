import React from "react";

const Condition = () => {

    let user = "sharon"

    return (
        <>
        { user ? (
            <h1> hai my name is {user}</h1>
        ) : (
            <h1>hai i dont have any name</h1>
        )}
        </>
    )
};


export default Condition;