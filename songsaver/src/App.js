import React from "react";
import FormStandalone from "./components/form/FormStandalone";
import FullForm from "./components/form/FullForm";

function App() {
  return (
    <div>
      <p>Form all in one file</p>
      <FormStandalone />
      <p>Form with components in different files</p>
      <FullForm />
    </div>
  );
}

export default App;
