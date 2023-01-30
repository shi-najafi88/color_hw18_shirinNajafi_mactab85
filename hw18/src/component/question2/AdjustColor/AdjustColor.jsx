import React from "react";
import { useState } from "react";
import BtnContain from "../BtnContain/BtnContain";
import './AdjustColor.css';

const AdjustColor = ()=> {

    const [redColor , setRedColor] = useState(0)
    const [greenColor , setGreenColor] = useState(0)
    const [blueColor , setBlueColor] = useState(0)
    
    return(
        <div className=" container_addjustColor">
            <BtnContain title={'Red'} setStatee={setRedColor}/>
            <BtnContain title={'Green'} setStatee={setGreenColor}/>
            <BtnContain title={'Blue'} setStatee={setBlueColor}/>
            <div className="showColor" style={{backgroundColor: 'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')'}}></div>
        </div>
    )
}

export default AdjustColor