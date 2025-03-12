// var React = require("react");
// var ReactDom = require("react-dom");

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello React!</h1>);

// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello React with Vite!</h1>
//     </div>
//   );
// }

// export default App;

// 1st react code
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
// root.render(<h1>Hello, React!</h1>);

// 1st jsx snippet
const createElement = <h1>Hello from JSX!</h1>;

// console.log(createElement);

// root.render(createElement);

function MainContent() {
  return <h1>React is Great!</h1>;
}

root.render(
  <div>
    <MainContent />
  </div>
);

export default App;
