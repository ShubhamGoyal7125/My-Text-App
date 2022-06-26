import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleUpperClick() {
    setText(text.toUpperCase());
    props.showAlert("Successfully converted to Upper case!", "success");
  }
  function handleLowerClick() {
    setText(text.toLowerCase());
    props.showAlert("Successfully converted to Lower case!", "success");
  }
  function handleCapitalizeClick() {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
    props.showAlert("Successfully converted to Capitalize!", "success");
  }
  function handleClearClick() {
    let newText = "";
    setText(newText);
    props.showAlert("Successfully Cleared the text!", "success");
  }

  let numberOfWords = text.split(/\s+/).filter((t)=> t!== "").length;

  return (
    <>
      <div className="container my-3">
        <h1>{props.title}</h1>
        <textarea
          className="form-control"
          id="floatingTextarea"
          rows={10}
          value={text}
          onChange={handleChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#272525",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <button 
          className="btn btn-primary my-3 mx-3" 
          onClick={handleUpperClick}
          disabled={text.length===0}
          // style={{backgroundColor: props.mode === ('green' || 'blue') ? props.mode: '#0B5ED7'}}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleLowerClick}
          disabled={text.length===0}
          // style={{backgroundColor: props.mode === ('green' || 'blue') ? props.mode: '#0B5ED7'}}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleCapitalizeClick}
          disabled={text.length===0}
          // style={{backgroundColor: props.mode === ('green' || 'blue') ? props.mode: '#0B5ED7'}}
        >
          Convert to Capitalize
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleClearClick}
          disabled={text.length===0}
          // style={{backgroundColor: props.mode === ('green' || 'blue') ? props.mode: '#0B5ED7'}}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {numberOfWords} words and {text.length} characters
        </p>
        <p>{0.008 * numberOfWords} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the above textbox to get preview!"}
        </p>
      </div>
    </>
  );
}

export default TextForm;

TextForm.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
};
