import CardCapitais from "./components/CardCapitais/CardCapitais";
import WeatherContent from "./components/WeatherContent/WeatherContent";

const App = () => {
  return (
    <main>
      <h1 className="title">Previsão do tempo</h1>
      <WeatherContent />
      <CardCapitais />
    </main>
  );
};

export default App;
