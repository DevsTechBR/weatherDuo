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
            }&q=${city}`
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
    <div>
      {!loading ? (
        <table>
          <thead>
            <tr>
              <th>min</th>
              <th>max</th>
              <th>Capitais</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index}>
                <td>{item.day.mintemp_c}</td>
                <td>{item.day.maxtemp_c}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CardCapitais;
