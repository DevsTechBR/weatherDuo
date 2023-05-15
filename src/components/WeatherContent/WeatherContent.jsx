import "./index.scss";
import Input from "../Input/Input";
import CardInput from "../CardInput/CardInput";
import { useState } from "react";

export default function WeatherContent() {
  const [city, setCity] = useState("");

  const otherTest = () => {
    console.log("Test");
  };
  otherTest();

  return (
    <>
      <CardInput />
      <Input setCity={setCity} otherTest={otherTest} />
    </>
  );
}
