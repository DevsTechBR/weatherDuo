import CardInput from "./components/CardInput/CardInput";
import CardCapitais from "./components/CardCapitais/CardCapitais";
import Input from "./components/Input/Input";

const App = () => {
  console.log(import.meta.env.VITE_WEATHER_API);

  return (
    <main>
      <h1 className="title">Previsão do tempo</h1>
      <CardInput></CardInput>
      <CardCapitais />
      <Input />
    </main>
  );
};

export default App;
