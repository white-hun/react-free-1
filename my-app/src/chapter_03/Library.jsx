import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 JS" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 React" numOfPage={500} />
    </div>
  );
}

export default Library;

function clock() {
  const element = (
    <div>
      <h1>Hello, React</h1>
      <h2>Current time: {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(clock, 1000);
