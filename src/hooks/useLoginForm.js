import { useState } from "react";

export default function useLoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return {
    data,
    handleChange,
  };
}
