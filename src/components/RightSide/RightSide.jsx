import React from "react";
import "./RightSide.css";

export const RightSide = ({ text }) => {
 const textArea = React.createRef();
 const onCopyText = () => {
  navigator.clipboard.writeText(textArea.current.value);
 };

 return (
  <React.Fragment>
   {!text && (
    <section className="card">
     <div className="card-without-text">
      <div className="card-img">
       <img src="src/assets/person.svg"></img>
      </div>
      <div className="card-title">
       <p>Ningún mensaje fue encontrado</p>
      </div>
      <div className="card-subtitle">
       <span>Ingresa el texto que deseas encriptar o desencriptar.</span>
      </div>
     </div>
    </section>
   )}
   {text && (
    <section className="card with-text">
     <div className="card-with-text">
      <div className="input-text">
       <textarea ref={textArea} value={text} onChange={() => {}}></textarea>
      </div>
      <div className="custom-button">
       <button onClick={onCopyText}>Copiar</button>
      </div>
     </div>
    </section>
   )}
  </React.Fragment>
 );
};
