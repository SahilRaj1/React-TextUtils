import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        // console.log("uppercase button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        // console.log(newText);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }

    const handleOnChange = (event) => {
        // console.log("handle on change function triggered");
        setText(event.target.value);
    }

    const [text, setText] = useState("This is a Sample text")
    // text = "This wont work"; // wrong way to change the state
    // setText("This will work"); // correct way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode === "light"? "#212529":"white"}}>
                <h1> {props.heading} </h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode === "dark"? "#212529":"white", color: props.mode === "light"? "#212529":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClear} >Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode === "light"? "#212529":"white"}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0? text : "Enter something above to preview"}</p>
            </div>
        </>
    )
}
