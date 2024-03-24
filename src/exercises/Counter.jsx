import useCounter from "../hooks/useCounter";
import "../styles/Counter.css";

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div className="counter">
      <h2> Número de clics: {counter} </h2>
      <button onClick={increment}>Aumentar</button>
      <button onClick={decrement}>Disminuir</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

//EXPLICACIÓN: Si hago que sea una función callback me va a tomar
//el estado anterior como argumento y luego devuelve el nuevo estado.
//Esto es bueno porque así se pueden agrupar múltiples actualizaciones,
//y al ser una función, puedo garantizar que siempre se obtenga el
//valor más reciente.
