import Loading from "../Loading/Loading";
import "./index.scss";
import { useEffect, useState } from "react";

const CardCapitais = () => {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const capitais = [
      "Brasília",
      "Rio de Janeiro",
      "São Paulo",
      "Belo Horizonte",
      "Salvador",
      "Recife",
      "Fortaleza",
      "Manaus",
      "Porto Alegre",
      "Curitiba",
      "Goiânia",
      "Belém",
      "João Pessoa",
      "Natal",
      "Florianópolis",
      "Cuiabá",
      "Campo Grande",
      "Maceió",
      "Teresina",
      "São Luís",
      "Vitória",
      "Aracaju",
      "Macapá",
      "Porto Velho",
      "Boa Vista",
      "Palmas",
    ];

    try {
      const data = await Promise.all(
        capitais.map((city) => {
          return fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${
              import.meta.env.VITE_WEATHER_API
            }&q=${city}`,
            {
              mode: "cors",
            }
          );
        })
      );

      const formattedData = [];

      for (const city of data) {
        const cityData = await city.json();
        const forecastDay = cityData.forecast.forecastday[0];
        formattedData.push({ ...forecastDay, city: cityData.location.name });
        console.log(cityData);
      }

      setDados(formattedData);
    } catch (err) {
      console.log("error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="divCapitais">
      {!loading ? (
        <div>
          <h3 className="titleCapitais">Capitais</h3>
          <section className="capitals">
            <ul className="capitals__list">
              <div className="empty">
                <div className="empty__fixed">
                  <li className="none">Min</li>
                </div>
                <div className="empty__fixed">
                  <li className="none">Max</li>
                </div>
              </div>
            </ul>
            <ul className="capitais__list">
              <div className="empty">
                <div className="empty__fixed">
                  <li className="min">Min</li>
                </div>
                <div className="empty__fixed">
                  <li className="max">Max</li>
                </div>
              </div>
            </ul>
            {dados.map((item, index) => (
              <div key={index}>
                <ul className="capitals__list">
                  <div className="empty">
                    <div className="empty__temp">
                      <li className="min">{item.day.mintemp_c}°</li>
                    </div>
                    <div className="empty__temp">
                      <li className="max">{item.day.maxtemp_c}°</li>
                    </div>
                  </div>
                  <li className="name">
                    <b>{item.city}</b>
                  </li>
                </ul>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CardCapitais;
