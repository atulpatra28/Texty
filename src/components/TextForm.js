import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick= ()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here 2');
    return (
        
        <div>
            
                <div className="mb-1">
                    <h2>{props.heading}</h2>
                    <label htmlFor="mybox" className="form-label" ></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows='5' columns='10'/>
                </div>

            <button className='btn btn-primary' onClick={handleUpClick} >Convert to upper case</button>
            <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to lower case</button>

        </div>
    )
}
