import { useState } from "react"
export default function ColorPicker({colors}){
    const [show, setShow] = useState(false);
    const [bcolor, setBcolor] = useState("pink")
    return (
        <div className="container" style={{backgroundColor:bcolor}}>
            <ul>
            {show && colors.map((color)=>{
                return (<li style={{backgroundColor: color}} onClick={()=>{setBcolor(color);setShow(false)}}></li>)
            })}
            </ul>
            <br />
            <button onClick={()=>{setShow(true)}}>Pick a color</button>
        </div>
    )
}