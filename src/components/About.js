import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [buttonText, setButtonText] = useState("Enable Dark Mode");

  // let handleToggleChange = ()=>{
  //   if(myStyle.color === 'white'){
  //       setStyle({
  //           color: "black",
  //           backgroundColor: "white"
  //       });
  //       setButtonText("Enable Dark Mode");
  //   }
  //   else{
  //       setStyle({
  //           color: "white",
  //           backgroundColor: "black"
  //       });
  //       setButtonText("Enable Light Mode");
  //   }

  // }

  const myStyle = {
    color: props.mode==='light'?'black':'white',
    backgroundColor: props.mode==='light'?'white':'black', 
  }


  return (
    <>
      <div className="container my-3 py-3" style={myStyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Anayze your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                My Text App gives you a way to analyze your text quickly and efficiently. Be it word count or character count or preview of your text.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                My Text App is a free word and character counter tool that provides instant character count and word count statistics for a given text. It reports the time to read read the text.  Thus it is suitable for writing text with word or charater  limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter works only in web browsers like Google Chrome, Firefox, Microsoft Edge, Safari, Opera. It suits to count characters in facebook, blog, books, excel documents, pdf documents, essays, letters etc.
              </div>
            </div>
          </div>
        </div>
        {/* <button type="button" onClick={handleToggleChange} className="btn btn-primary my-3">{buttonText}</button> */}
      </div>
    </>
  );
}
