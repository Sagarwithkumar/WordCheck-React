import React,  {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let  newText=text.toUpperCase();
        setText(newText);
        //props.showAlert("Converted to Uppercase","success")
    }
    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
        
    }
    const handleTitleclick=()=>{
        let  newText = text.toLowerCase().split(' ');
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
        }
        setText(newText.join(' '));
        //props.showAlert("Converted to Titlecase","success")
      
    }
    const handleClearclick=()=>{
        
        let  newText=('');
        setText(newText);
        //props.showAlert("Text Cleared","success")
    }
    const handleLoclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let  newText=text.toLowerCase();
        setText(newText);
           // props.showAlert("Converted to Lowercase","success")
    }
    function handlecopy() {

        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        //props.showAlert("Text Copied", "success")
    }

    const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <div>
        <h2>{props.heading}</h2>
           <div className="mb-3">
            
             <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-success mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
           <button className="btn btn-success mx-1 " onClick={handleLoclick}>Convert to Lowercase</button>
           <button className="btn btn-success mx-1 " onClick={handleTitleclick}>Convert to Titlecase</button>
           
           <button className="btn btn-success mx-1 " onClick={handlecopy}>Copy Text</button>
           <button className="btn btn-success mx-1 " onClick={handleClearclick}>Clear Text</button>
           
    </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes required to Read.</p>
    <h2 >Preview</h2>
    <p>{text.length>0?text:"Enter something for preview"}</p>
    </div>

    </>
     
  )
}
