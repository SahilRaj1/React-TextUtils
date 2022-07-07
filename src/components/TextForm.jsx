import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("uppercase button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClear = () => {
        setText("");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        // console.log(newText);
        setText(newText.join(" "));
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
            <div className="container">
                <h1> {props.heading} </h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleClear} >Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
