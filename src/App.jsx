// he partido de ejercicios anteriores porque ya tenía un componente llamado App

import { StrictMode } from "react";
import FilteredList from "./exercises/FilteredList";
// import Login from "./exercises/Login";
// import Clock from "./exercises/Clock";
// import TodoList from "./exercises/TodoList";
// import UncontrolledLogin from "./exercises/UncontrolledLogin";
// import GithubUser from "./exercises/GithubUser";
// import CurrentLocation from "./exercises/CurrentLocation";
// import GithubUsers from "./exercises/GithubUser";
// import ColorList from "./exercises/Color";
// import Counter from "./exercises/Counter";
// import Hello from "./exercises/Hello";
// import InteractiveWelcome from "./exercises/InteractiveWelcome";
// import FocusableInput from "./exercises/FocusableInput";
// import MountedOnce from "./exercises/MountedOnce";
// import Message from "./exercises/Message";
// import MouseClicker from "./exercises/MouseClicker";
// import Welcome from "./exercises/Welcome";
// import "./exercises/welcome.css";
// import Content from "./exercises/Container";

// function AlertClock({ label, handleClick }) {
//   return (
//     <div>
//       <button onClick={handleClick}>{label}</button>
//     </div>
//   );
// }

export default function App() {
  // const handleAlert = () => {
  //   const ahora = new Date().toLocaleTimeString();
  //   alert(`Horario: ${ahora}`);
  // };

  return (
    <div>
      <StrictMode>
        {/* <Hello />
        <Message />
        <AlertClock label="Enseñar Horario" handleClick={handleAlert} /> 
        <MouseClicker />
        <InteractiveWelcome />
        <FocusableInput /> 
        <MountedOnce /> 
        <ColorList />
        <Welcome />
        <Content />
        <Clock />
        <UncontrolledLogin />
        <TodoList />
        <Login />
        <GithubUser />
        <CurrentLocation />
        <Counter />
      <GithubUsers />*/}
      <FilteredList />
      </StrictMode>
    </div>
  );
}
