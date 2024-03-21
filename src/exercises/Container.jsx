import React, { useState } from "react";

function Container({ title, children }) {
  const [display, setDisplay] = useState(false);
  const toShow = { backgroundColor: "white", border: "1px solid red" };
  const toHide = { display: "none" };

  function handleDisplay() {
    setDisplay((show) => !show);
  }

  return (
    <div className="app">
      <div className="app-title">
        {title} <button onClick={handleDisplay}>Display</button>
      </div>
      <div className="app-children" style={display ? toShow : toHide}>
        {children}
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <Container title={<h1>Este é o título</h1>}>
      <p>Este é o corpo do texto.</p>
    </Container>
  );
}
