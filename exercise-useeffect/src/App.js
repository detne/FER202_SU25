import React from "react";
import ValidatedInput from "./components/ValidatedInput";
import EmailPasswordForm from "./components/EmailPasswordForm";
import FullValidationForm from "./components/FullValidationForm";

function App() {
  return (
    <div className="container mt-4">
      <h2>Bài 4: Validated Input</h2>
      <ValidatedInput />
      <hr />

      <h2>Bài 5: Email + Password Form</h2>
      <EmailPasswordForm />
      <hr />

      <h2>Bài 6: Full Form Validation</h2>
      <FullValidationForm />
    </div>
  );
}

export default App;
