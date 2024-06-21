import React,{useState} from 'react'


export default function TextForm(props) {

    
    const handleUpClick= ()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
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

    const speak = () => {
        if ('speechSynthesis' in window) {
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
        } else {
            console.error('Speech Synthesis not supported in this browser.');
        }
    };

    const handleInverseClick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
    };
    const handleSwapClick = () => {
        // Function to swap the case of each character in a string
        const swapCase = (str) => {
            return str
                .split('') // Split the string into an array of characters
                .map(char => {
                    if (char === char.toUpperCase()) {
                        return char.toLowerCase(); // Convert uppercase to lowercase
                    } else {
                        return char.toUpperCase(); // Convert lowercase to uppercase
                    }
                })
                .join(''); // Join the array back into a string
        };

        // Swap the case of the current text
        let newText = swapCase(text);
        setText(newText);
    }


    const handleCopy=()=>
        {
            var text=document.getElementById("mybox");
            text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            props.showAlert("Copied to clipboard!","success");
            setTimeout(() => {
                document.activeElement.blur(); // Optional
                text.focus();
                document.getSelection().removeAllRanges(); // Remove selection after focus
                }, 10);     }

    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            
                <div className="mb-1">
                    <h2>{props.heading}</h2>
                    <label htmlFor="mybox" className="form-label" ></label>
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black' }} onChange={handleOnChange} id="mybox" rows='5' columns='10'/>
                </div>

            <button disabled={text.length===0} className='btn btn-outline-primary my-2' onClick={handleUpClick} ><b>Convert to upper case</b></button>
            <button disabled={text.length===0} className='btn btn-outline-primary mx-3 my-2' onClick={handleLowClick}><b>Convert to lower case</b></button>
            <button disabled={text.length===0}className='btn btn-outline-primary mx-2 my-2' onClick={handleClearClick}><b>Clear text</b></button>
            <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-outline-warning mx-2 my-2"><b>Speak</b></button>
            <button disabled={text.length===0} className='btn btn-outline-secondary mx-2 my-2' onClick={handleInverseClick}><b>Inverse</b></button>
            <button disabled={text.length===0} className='btn btn-outline-success mx-2 my-2' onClick={handleSwapClick}><b>Swap</b></button>
            <button disabled={text.length===0}className='btn btn-outline-success mx-2 my-2' onClick={handleCopy}><b>Copy</b></button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary:</h1>
            <p style={{color:props.mode==='dark'?'yellow':'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"*Nothing to preview*"}</p>
        </div>
        </>
    )
}
