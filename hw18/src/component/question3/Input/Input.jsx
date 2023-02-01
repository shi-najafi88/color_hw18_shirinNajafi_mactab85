import React from "react";
import './Input.css'

const Input = (props)=> {
  
    const changeHandler = (event)=> {
        props.clickHandel(event);
    }
    return(
       <>
       <input 
       className="formInput" 
       type="text"
       placeholder={props.title} 
       onChange={changeHandler}
       value={props.state}
       />
       </>
    )
}

export default Input