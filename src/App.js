import React from "react";
import { Route, Routes } from "react-router-dom";
import { Form } from "./components/form/Form";
import { Success } from "./succes/Success";
import Home from "./components/home/Home";
import Hero from "./components/hero/hero";
function App() {

  return (
  <div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/application" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </div>
  );
}

export default App;
