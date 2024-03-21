import { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";

export default function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function onLogin(data) {
    console.log(data);
  }

  return (
    <div>
      <h1>Controlled Form</h1>
      <Welcome name={name || "user"} />
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={handleNameChange}
      />
      <Login onLogin={onLogin} />
    </div>
  );
}
