import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import './BtnContain.css'

// const rnd = 

const BtnContain = (props)=> {

    const increaseHandler= ()=> { 
        props.setStatee(prev => prev+5)       
    }

    const decreaseHandler= ()=> {
        props.setStatee(prev => prev-5)
    }

    return(
        <>
        <div className="container_btnContain">
            <span>{props.title}</span>
            <Button name={'Increas'} color={props.title} clickHandel={increaseHandler} />
            <Button name={'Decrease'} color={props.title} clickHandel={decreaseHandler} />           
        </div>
        </>        
    )
}

export default BtnContain