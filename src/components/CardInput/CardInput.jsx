import React from "react";
import "./index.scss";

const CardInput = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="contentContainer">
          <div className="contentContainer__boxOut">
            <h5>Niterói RJ - Brasil</h5>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="contentContainer__boxClimate">
            <h1 className="contentContainer__boxClimate--climate">Nublado</h1>
            <h1 className="contentContainer__boxClimate--temperature">20°C</h1>
          </div>
          <div className="contentContainer__Container">
            <div className="contentContainer__Container--boxLeft">
              <div className="contentContainer__Container--boxLeft__box">
                <h3>17°C</h3>
                <i className="fa-solid fa-arrow-down blue"></i>
                <h3>25°C</h3>
                <i className="fa-solid fa-arrow-up red"></i>
              </div>
              <h4>Vento: 9</h4>
            </div>
            <div className="contentContainer__Container--boxRight">
              <h4>Sensação: 26.7°C</h4>
              <h4>Umidade: 65%</h4>
            </div>
          </div>
          <div className="contentContainer__footer">
            <h4>Quarta</h4>
            <div className="contentContainer__footer--box">
              <h3 className="blue">17</h3>
              <h3 className="red">25</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardInput;
