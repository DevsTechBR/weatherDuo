import "./index.scss";

const Input = () => {
  return (
    <div className="inputSearch">
      <div className="inputSearch__boxOne">
        <input type="search" placeholder="Digite o nome da cidade..." />
        <div className="inputSearch__boxTwo">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default Input;
