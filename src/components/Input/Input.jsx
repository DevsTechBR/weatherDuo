import "./index.scss";

export default function Input({ setCity, searchCity, city }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchCity(true);
    }
  };
  return (
    <div className="inputSearch">
      <div className="inputSearch__boxOne">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          onKeyDown={handleKeyPress}
          type="search"
          placeholder="Digite o nome da cidade..."
        />
        <div className="inputSearch__boxTwo">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              searchCity(true);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
