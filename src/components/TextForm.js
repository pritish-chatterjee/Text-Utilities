import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="container">
        <h2 className="m-2">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Start typing here...."
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div disabled={text.length === 0} className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((el) => {
              return el.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {Math.round(0.008 * text.split(" ").length)} Minutes To Read This Text
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
