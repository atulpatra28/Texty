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
    const handleClearClick= ()=>{
        // console.log("uppercase was clicked"+ text);
        let newText='';
        setText(newText);
    }

    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    return (
        <>
        <div className='container'>
            
                <div className="mb-1">
                    <h2>{props.heading}</h2>
                    <label htmlFor="mybox" className="form-label" ></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows='5' columns='10'/>
                </div>

            <button className='btn btn-primary my-2' onClick={handleUpClick} >Convert to upper case</button>
            <button className='btn btn-primary mx-3 my-2' onClick={handleLowClick}>Convert to lower case</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear text</button>

        </div>
        <div className="container my-3">.
            <h1>Your text summary:</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
