import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
// TemperatureInput 컴포넌트를 사용하여  섭씨와 화씨 두가지의 입력양식을 제공

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Boil</p>;
  }
  return <p>Not boil</p>;
}

// fahrenheit -> celsius
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// celsius -> fahrenheit
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 온도값과 변환하는 함수를 받아서 값을 변환시켜 return
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// state로 temperature(온도) 와 scale(단위) 선언
// 온도, 단위 각각 저장
function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("C");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("C");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("F");
  };

  // F(화씨)면 toCelsius 사용해서 섭씨로 바꾸는 변수
  const celsius = scale === "F" ? tryConvert(temperature, toCelsius) : temperature;
  // C(섭씨)면 toFahrenheit 사용해서 화씨로 바꾸는 변수
  const fahrenheit = scale === "C" ? tryConvert(temperature, toFahrenheit) : temperature;

  // 모든 온도를 섭씨로 변환하여 BoilingVerdict에 전달하므로서
  // 물이 끓는지 아닌지 출력
  return (
    <div>
      <TemperatureInput scale="C" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="F" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;

function FancyBorder(props) {
  // props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어온다
  return <div className={"FancyBorder FancyBorder-" + props.color}>{props.children}</div>;
}

// children이라는 prop은 react에서 제공해주는 것

//----------------------------------------------------

function WelcomeDialog(props) {
  // FancyBorder 컴포넌트 안에 있는 모든 JSX 태그는 children으로 전달
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Hello</h1>
      <p className="Dialog-message">Welcome to our site</p>
    </FancyBorder>
  );
}

//----------------------------------------------------

// 여러개의 children 집합이 필요한 경우
// 화면을 외쪽과 오른쪽으로 분할해서 보여주는 컴포넌트
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function APP(props) {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
