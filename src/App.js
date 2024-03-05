import React from "react";
import { Route, Routes } from "react-router-dom";
import { Form } from "./form/Form";
import { Success } from "./succes/Success";
function App() {

  return (
  <div>
    <Routes>
      <Route exact path="/" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </div>
  );
}

export default App;
