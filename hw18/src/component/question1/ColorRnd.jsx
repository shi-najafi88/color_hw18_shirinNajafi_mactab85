import React from "react";
import { useState } from "react";
import "./colorRnd.css"

const ColorRnd = ()=> {

    const red_value= Math.floor(Math.random()*255)
    const green_value= Math.floor(Math.random()*255)
    const blue_value= Math.floor(Math.random()*255)
    const [arrayColor , setarrayColor] = useState([])

    const clickHandler = ()=> {
        const newItem = {rgb:'rgb(' + red_value + ',' + green_value + ',' + blue_value + ')'}
        setarrayColor([...arrayColor,newItem])   
    }
    
    return(
        <>
        <div className="container_colorRnd">
            <button className="addColor-btn" onClick={clickHandler}>Add Color</button>
            <div className="wraper_color">
                {arrayColor.map(item => (
                    
                    <dir className='wraper_cardItem'>
                        <div className="color_box" style={{backgroundColor:item.rgb}}></div>
                        <p>{item.rgb}</p>
                    </dir>
                ))}     
            </div>
        </div>
        </>
    )
}

export default ColorRnd