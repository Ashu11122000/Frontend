// Fragment: A built-in component that allows you to group multiple elements without adding an extra node to the DOM.
import { useState, Fragment } from "react";

import reactImg from "./assets/react-core-concepts.png";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  return (
    <Fragment>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
