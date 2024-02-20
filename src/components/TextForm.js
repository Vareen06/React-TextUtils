import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        // console.log('Uppercase was clicked'+text);
        let newText=text.toLocaleUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        // console.log('Uppercase was clicked'+text);
        let newText=text.toLocaleLowerCase();
        setText(newText)
    }
    const handleClClick=()=>{
      // console.log('Uppercase was clicked'+text);
      let newText=('');
      setText(newText)
  }
    const handleOnChange=(event)=>{
        // console.log('On Change');
        setText(event.target.value)
    }
    const[text,setText]=useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control my-2" value={text} onChange={handleOnChange} 
              style={{backgroundColor: props.mode==='light'?'dark':'light'}}id="myBox" rows="8"></textarea>
              <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
              <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
              <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
            </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
  </>
  )
}
