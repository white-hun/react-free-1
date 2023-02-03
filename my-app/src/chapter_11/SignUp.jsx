import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("man");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Name: ${name}, Sex: ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        Sex:
        <select value={gender} onChange={handleChangeGender}>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;

// ---------------------------------------------------시작
// 섭씨 온도를 props로 받는다
//물이 100도 이상이면 Boil, 그 외에는 Not boil
function BoilingVerdict(props) {
   if (props.celsius >= 100) {
       return <p>Boil</p>
   }
   return <p>Not boil</p>
}
//  ---------------------------------------------------
//BoilingVerdict 함수를 사용하는 부모 컴퍼넌트
function Calculator(props) {
    const [temperature, setTemperature] = useState("");
// 사용자가 온도값을 변경할 때 마다 handleChange 함수가 호출
//setTemperature 함수를 통해 온도값을 가지고 있는 temperature(state)를 업데이트
    const handleChange = (event) => {
        setTemperature(event.target.value);
    }
// 사용자에게 입력을 받기 위한 input
// controled component 형태
    return (
        <fieldset>
                <legend>Write a celsius</legend>
                <input
                    value={temperature}
                    onChange={handleChange} />
                <BoilingVerdict
                    // state의 온도값은 Boilingverdict에 celsius 라는 prop으로 전달
                    celsius={parseFloat(temperature)} />
        </fieldset>
    )
}
// ---------------------------------------------------
// Calculator 컴포넌트의 (온도)입력 컴포넌트 추출
// 섭씨, 화씨온도를 각각 따로 입력받을 수 있도록하여 재사용이 가능한 컴포넌트 형태로 사용
const scaleNames = {
    C: "celsius",
    F: "fahrenheit"
};

function Temperature(props) {
    const [temperature, setTemperature] = useState("");

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }
    // 온도의 단위(scale) 추가
    // 섭씨, 화씨로 입력 가능
    return (
        <fieldset>
                <legend>
                    Write a temperature(scale:{scaleNames[props.scale]});
                </legend>
                <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
}
// ---------------------------------------------------
// 섭씨, 화씨온도를 사용가능하도록 calculator 컴포넌트를 변경
function Calculator(props) {
  // 화씨, 섭씨온도를 입력 받음
  return (
    <div>
      <TemperatureInput scale="C" />
      <TemperatureInput scale="F" />
    </div>
  );
}
// 문제점:사용자가 입력한 값이 temperatureInput의 state에 저장되기 때문에
// 섭씨, 화씨를 따로 입력 받으면 두 값이 다를 수 있음

// ---------------------------------------------------
// 온도 변환 함수
// 섭씨 -> 화씨
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
//화씨 -> 섭씨
function toFahrenheit(celsius) {
    return (celsius * 9 / 5)  + 32;
}

// ---------------------------------------------------

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const reounded = Math.round(output * 1000) / 1000;
    return reounded.toString();
}

export default tryConvert;

// ---------------------------------------------------

tryConvert("abc", toCelsius);      // empty string을 return
tryConvert("10.22", toFahrenheit); // '50.396'을 return

// ---------------------------------------------------

return(
  ...
  // 변경 전: <input value={temperature} onChange={handleChange} />
  <input value={props.temperature} onChange={handleChange} />
  ...
)

// ---------------------------------------------------

const handleChange = (event) => {
    // 변경 전 setTemperature(event.target.value);
    props.onTemperatureChange(event.target.value);
}

// ---------------------------------------------------

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return (
      <fieldset>
          <legend>
              Write a temperature(level:{scaleNames[props.scale]});
          </legend>
              <input value={props.temperature} onChange={handleChange} />
      </fieldset>
    )
}

// ---------------------------------------------------

function Calculator(props)  {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("C");

    const handleCelsiusChange = (temperature) => {
      setTemperature(temperature);
      setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
      setTemperature(temperature);
      setScale("F");
    }

    const celsius = scale === "F" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "C" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="C"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="F"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    )
}
