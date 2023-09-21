import React,{useState} from 'react'

export default function TextForm(props) {
      const handleUPclick=()=>{
        console.log("upper case was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
      }
      const handleLoclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
      }
      const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
      }

      const [text,setText]=useState('enter the text here')
  return (
    <div>
        <h1>{props.heading}</h1>
          <div className="mb-3">
           <label for="myBox" className="form-label">Text Area</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
         <button className="btn btn-primary mx-1" onClick={handleUPclick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
    </div>
  )
}
