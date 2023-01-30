import React from "react";
import './Button.css'

const Button = (props)=> {

    const controlColor = ()=> {
        props.clickHandel()
    }
    
    return(
        <div>
            <button className="btn_inc_dec" onClick={controlColor}>{props.name +' '+props.color}</button>
        </div>
    )
}

export default Button