import React from "react";
import { useState } from "react";
import BtnContain from "../BtnContain/BtnContain";
import './AdjustColor.css';


const red_value= Math.floor(Math.random()*255)
const green_value= Math.floor(Math.random()*255)
const blue_value= Math.floor(Math.random()*255)

const AdjustColor = ()=> {

    const [redColor , setRedColor] = useState(0)
    const [greenColor , setGreenColor] = useState(0)
    const [blueColor , setBlueColor] = useState(0)
    
    return(
        <div className=" container_addjustColor">
            <BtnContain title={'Red'} state={redColor} setStatee={setRedColor}/>
            <BtnContain title={'Green'} state={greenColor} setStatee={setGreenColor}/>
            <BtnContain title={'Blue'} state={blueColor} setStatee={setBlueColor}/>
            <div className="showColor" style={{backgroundColor: 'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')'}}></div>
        </div>
    )
}

export default AdjustColor