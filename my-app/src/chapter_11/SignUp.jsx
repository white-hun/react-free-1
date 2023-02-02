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

// ---------------------------------------------------
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
    f: "far"
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