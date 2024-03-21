import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import "../styles/Clock.scss";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const [lang, setLang] = useState("en");

  function handleLanguage(newLang) {
    setLang(newLang);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());

      return () => {
        clearInterval(intervalId);
      };
    }, 1000);
  }, []);

  return (
    <div className="clock-container">
      <div className="language-buttons">
        <button onClick={() => handleLanguage("en")}>en-US</button>
        <button onClick={() => handleLanguage("es")}>es-ES</button>
      </div>
      <LanguageContext.Provider value={lang}>
        <h1>{lang === "en" ? "Current time" : "Hora actual"}</h1>
        <h2 className="time-display">{date.toLocaleTimeString()}</h2>
      </LanguageContext.Provider>
    </div>
  );
}
