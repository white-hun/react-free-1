const scaleNames = {
  C: "celsius",
  F: "fahrenheit",
};

// props로 scale과 temperature를 받아서 표시
// 온도값이 변경되었을 경우 onTemperature 함수를 호출하여
//상위 컴포넌트로 변경된 값을 전달
function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>Write a temperature(scale:{scaleNames[props.scale]});</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
