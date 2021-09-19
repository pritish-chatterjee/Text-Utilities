import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utilities"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div
          className="container my-3"
          style={{ color: mode === "light" ? "black" : "white" }}
        >
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter Text Below" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
