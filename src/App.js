import React from "react";
import { Route, Routes } from "react-router-dom";
import { Form } from "./form/Form";
import { Success } from "./succes/Success";
import Home from "./home/Home";
function App() {

  return (
  <div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/application-form" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </div>
  );
}

export default App;
