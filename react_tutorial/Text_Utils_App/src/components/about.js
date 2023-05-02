// import React, { useState } from "react";
import React from "react";

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color: "white",
  //     backgroundColor: "black",
  //     border: "1px white solid",
  //   });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h2>ABOUT US</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              To UpperCase
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>How to convert to uppercase:</strong>
              <ol>
                <li>Copy the text you want to convert from the word processor you are using.</li>
                <li>Paste the text you copied into the text area provided on the screen:</li>
                <li>Click on the “UPPER CASE” button.</li>
              </ol>
              You should have your output in a few seconds:
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              To LowerCase
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>How to convert to lowercase:</strong>
              <ol>
                <li>Copy the text you want to convert from the word processor you are using.</li>
                <li>Paste the text you copied into the text area provided on the screen:</li>
                <li>Click on the LOWER CASE” button.</li>
              </ol>
              You should have your output in a few seconds:
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              To CamelCase
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>How to convert to camelcase:</strong>
              <ol>
                <li>Copy the text you want to convert from the word processor you are using.</li>
                <li>Paste the text you copied into the text area provided on the screen:</li>
                <li>Click on the CAMEL CASE” button.</li>
              </ol>
              You should have your output in a few seconds:
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-warning" onClick={toggleStyle}>
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
