import { StrictMode } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./exercises/Welcome";
import Counter from "./exercises/Counter";
import GithubUserList from "./exercises/GithubUserList";
import ShowGithubUser from "./exercises/ShowGithubUser";
import "./App.css";
import AddUserMessage from "./exercises/AddUserMessage";

export default function App() {
  function NotFound() {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>Desculpe, a página não existe</p>
      </div>
    );
  }

  return (
    <div>
      <StrictMode>
        <div className="navbar">
          <Link to="/">Welcome</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users">Github Users</Link>
        </div>
        <Routes>
          <Route path="/" element={<Welcome name={"John"} />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<AddUserMessage />} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </StrictMode>
    </div>
  );
}
