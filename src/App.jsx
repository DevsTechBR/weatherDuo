import React from "react";
import CardInput from "./components/CardInput/CardInput";
import CardCapitais from "./components/CardCapitais/CardCapitais";
import Input from "./components/input/input";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="title">Previsão do tempo</h1>
      <CardInput></CardInput>
      <CardCapitais />
      <Input />
    </React.Fragment>
  );
};

export default App;
