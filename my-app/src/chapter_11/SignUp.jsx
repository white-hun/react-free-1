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
 function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Boil</p>
    }
    return <p>Not boil</p>
 }

 export default BoilingVerdict;
//  ---------------------------------------------------
function Calculator(props) {
    const [temperature, setTemperature] = useState("");

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
                <legend>Write a celsius</legend>
                <input
                    value={temperature}
                    onChange={handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
        </fieldset>
    )
}

export default Calculator;
// ---------------------------------------------------

const scaleNames = {
    c: "celsius",
    f: "fahrenheit"
};

function Temperature(props) {
    const [Temperature, setTemperature] = useState("");

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
                <legend>
                    Write a temperature(level:{scaleNames[props.scale]});
                </legend>
                <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
}
export default Temperature;

// ---------------------------------------------------

function Calculator(props) {
  return (
    <div>
      <TemperatureInput scale="C" />
      <TemperatureInput scale="F" />
    </div>
  );
}

// ---------------------------------------------------
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5)  + 32;
}

// ---------------------------------------------------

function tryConvert(temperature, tryConvert) {
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
