import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Second from "./Components/Second";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>{/* <Second /> */}</div>
    </>
  );
};
export default App;
