import React from "react";
import Card_input from "./components/Card_input/Card_input";
import Card_capitais from "./components/Card_capitais/Card_capitais";
import Input from "./components/input/input";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="title">Previsão do tempo</h1>
      <Card_input></Card_input>
      <Card_capitais />
      <Input />
    </React.Fragment>
  );
};

export default App;
