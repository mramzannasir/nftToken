import React from "react";
import First from "./Components/First";
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
      <div>
        <First />
      </div>
      <div>{/* <Second /> */}</div>
    </>
  );
};
export default App;
