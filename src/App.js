import React from "react";
import logo from "./stronkcat.jpeg";
import useSound from "use-sound";
import "./App.css";
import m from "./Miao.mp3";
import M from "./Miaoo.mp3";
import y from "./Ying.mp3";
import Y from "./Yingg.mp3";

function App() {

  const BoopButton = () => {
    const [play] = useSound(m);
    return <button style={{ backgroundColor: "red" }} onClick={play}>Miao</button>;
  };

  const MButton = () => {
    const [play1] = useSound(M);
    return <button style={{ backgroundColor: "blue" }} onClick={play1}>MIiiiaaaooo!</button>;
  };

  const SyButton = () => {
    const [play2] = useSound(y);
    return <button  style={{ backgroundColor: "green" }} onClick={play2}>Ying</button>;
  };

  const YButton = () => {
    const [play3] = useSound(Y);
    return <button style={{ backgroundColor: "brown" }} onClick={play3}>YiiiiNNNGggggg!</button>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row">
          <div className="column">{BoopButton()}</div>
          <div className="column">
           {MButton()}
          </div>
        </div>
        <div className="row">
          <div className="column">
            {SyButton()}
          </div>
          <div className="column">
            {YButton()}
          </div>
        </div>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
