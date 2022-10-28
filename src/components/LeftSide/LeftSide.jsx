import React from "react";
import "./LeftSide.css";

export const LeftSide = ({
 text,
 textEncrypted,
 setText,
 setTextEncrypted,
}) => {
 const onInputText = ({ target: { value } }) => {
  const regex = /^[a-zA-Z]*$/g;
  if (!regex.test(value)) {
   value = value.replace(value, "");
   setText(text + value);
   return;
  }
  value = value.toLowerCase();
  setText(value);
 };
 const onCryptText = () => {
  let i = 0;
  const textSplit = text.split("");
  let textEncrypted = "";
  const vocals = {
   a: "ai",
   e: "enter",
   i: "imes",
   o: "ober",
   u: "ufat",
  };
  while (i < textSplit.length) {
   if (!vocals[textSplit[i]]) {
    textEncrypted = textEncrypted + textSplit[i];
   }
   if (vocals[textSplit[i]]) {
    textEncrypted = textEncrypted + vocals[textSplit[i]];
   }
   i++;
  }
  setTextEncrypted(textEncrypted);
 };

 const onDecrypText = () => {
  textEncrypted = textEncrypted.replace("ai", "a");
  textEncrypted = textEncrypted.replace("enter", "e");
  textEncrypted = textEncrypted.replace("imes", "i");
  textEncrypted = textEncrypted.replace("ober", "o");
  textEncrypted = textEncrypted.replace("ufat", "u");
  setTextEncrypted(textEncrypted);
 };
 return (
  <React.Fragment>
   <section className="left-side">
    <div className="custom-icon">
     <img src="src/assets/alura-icon.svg"></img>
    </div>
    <div className="custom-input">
     <textarea
      onInput={onInputText}
      value={text}
      placeholder="Ingrese el texto aqui"
     ></textarea>
    </div>
    <div className="custom-section">
     <div className="custom-info">
      <img src="src/assets/info-icon.svg"></img>
      <span>Solo letras minúsculas y sin acentos.</span>
     </div>
     <div className="custom-buttons">
      <button onClick={onCryptText}>Encriptar</button>
      <button onClick={onDecrypText}>Desencriptar</button>
     </div>
    </div>
   </section>
  </React.Fragment>
 );
};
