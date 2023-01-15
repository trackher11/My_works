import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCamelClick = () => {
    let arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //   setText("New text");
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-light" onClick={handleUpClick}>
        To Uppercase
      </button>
      <button className="btn btn-light" onClick={handleLowClick}>
        To Lowercase
      </button>
      <button className="btn btn-light" onClick={handleCamelClick}>
        To CamelCase
      </button>
    </div>
  );
}
