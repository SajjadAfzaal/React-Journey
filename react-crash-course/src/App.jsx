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
// <ul>
//   <li>Was first release in 2013</li>
//   <li>Was originally created by Jordan Walke</li>
//   <li>Has well over 200K stars on GitHub</li>
//   <li>Is maintained by Meta</li>
//   <li>Powers thousands of enterprise apps, including mobile apps</li>
// </ul>
//     </main>
//   );
// }

//7. challenge
// import { createRoot } from "react-dom/client";
// //import { Fragment } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import MainContent from "./MainContent";

// const root = createRoot(document.getElementById("root"));

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

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */

// function Page() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }

// root.render(<Page />);

//8. Challenge Static page app

/**
Challenge: Project setup

- Create an App component in a separate App.jsx file which is a sibling
  to this index.jsx file.
- Create a `components` folder
- Create the following components in separate files inside
  the components folder. In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Have App component import and render the Navbar and Main components
- Import and render the App component inside of index.jsx using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this 
  works if you haven't done it before.
*/
import { Navbar } from "./components/Navbar";
import { MainComponent } from "./components/MainComponent";

export default function App() {
  return (
    <>
      <Navbar />
      <MainComponent />
    </>
  );
}
