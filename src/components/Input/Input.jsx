import "./index.scss";

export default function Input({ setCity, otherTest }) {
  return (
    <div className="inputSearch">
      <div className="inputSearch__boxOne">
        <input type="search" placeholder="Digite o nome da cidade..." />
        <div className="inputSearch__boxTwo">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              otherTest();
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
