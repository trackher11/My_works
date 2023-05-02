import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //   setText("New text");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleCamelClick = () => {
    let arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
    props.showAlert("Converted to Camel Case", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const WordCount = (str) => {
    return str.split(" ").filter((n) => {
      return n !== "";
    }).length;
  };

  let color = "#3e6050";

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : color }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#3e6050" }}
          ></textarea>
        </div>
        <button className="btn btn-success mx-2 my-1" onClick={handleUpClick}>
          To Uppercase
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleLowClick}>
          To Lowercase
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleCamelClick}>
          To CamelCase
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : color }}>
        <h2>My text summary</h2>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters. */}
          {WordCount(text)} words and {text.length} characters.
        </p>
        <p>{text.split(" ").length * 0.008} minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text in the box above to preview it here"}</p>
      </div>
    </>
  );
}
