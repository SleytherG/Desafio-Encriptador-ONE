import React, { useState } from "react";
import "./App.css";
import { LeftSide } from "./components/LeftSide/LeftSide";
import { RightSide } from "./components/RightSide/RightSide";

function App() {
 const [text, setText] = useState("");
 const [textEncrypted, setTextEncrypted] = useState("");

 return (
  <React.Fragment>
   <section className="container">
    <LeftSide
     text={text}
     textEncrypted={textEncrypted}
     setText={setText}
     setTextEncrypted={setTextEncrypted}
    />
    <RightSide text={textEncrypted} />
   </section>
  </React.Fragment>
 );
}

export default App;
