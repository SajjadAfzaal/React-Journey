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

//1.
// 1st react code
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));
//  root.render(<h1>Hello, React!</h1>);

//2.
// 1st jsx snippet
// const createElement = <h1>Hello from JSX!</h1>;
// console.log(createElement);
// root.render(createElement);

//3.
//1st custom element
// function MainContent() {
//   return <h1>React is Great!</h1>;
// }

// root.render(
//   <div>
//     <MainContent />
//   </div>
// );

//4. 1.
// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )

//5.
/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

element.className = "myStyle";
    
*/

// Vanila DOM Challenge
// const h1 = document.createElement("h1");
// const text = document.createTextNode("This is imparative coding");
// h1.className = "header";
// h1.appendChild(text);

// const root = document.getElementById("root");
//root.appendChild(h1);

// root.render(<h1 className="header">Declarative React Coding</h1>);

//6.
// static page

// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));

// root.render(
//   //React()
//   <React />
// );

// function React() {
//   return (
//     <main>
//       <img src="react-logo.png" width="40px" alt="React logo" />
//       <h1>Fun facts about React!</h1>
//       <ul>
//         <li>Was first release in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 200K stars on GitHub</li>
//         <li>Is maintained by Meta</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </main>
//   );
// }

//7. challenge
import { createRoot } from "react-dom/client";
//import { Fragment } from "react";
import logo from "./react-logo.png";
const root = createRoot(document.getElementById("root"));

/** Challenge:
 * Move the `main` element into its own component called "MainContent"
 * and render that component inside the Page component.
 *
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
 */

/**
 * Challenge:Header
 *
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

function Header() {
  return (
    <header className="head">
      <img src={logo} width="40px" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);

export default App;
