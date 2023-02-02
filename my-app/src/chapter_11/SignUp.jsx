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
