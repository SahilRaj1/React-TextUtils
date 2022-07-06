import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
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
            <h1> {props.heading} </h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        </>
    )
}
