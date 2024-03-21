import { useState } from "react";
import useGithubUser from "../hooks/useGithubUser";

function GithubUserItem({ userData }) {
  return (
    <div>
      <p>Nome: {userData.name}</p>
      <p>User: {userData.login}</p>
      <p>
        Foto:{" "}
        <img
          src={userData.avatar_url}
          alt={userData.login}
          style={{ width: "40px" }}
        />
      </p>
    </div>
  );
}

export default function GithubUser() {
  const [username, setUsername] = useState();
  const { userData, loading, error, fetchUserData } = useGithubUser(username);

  function handleFormSubmit(event) {
    event.preventDefault();
    fetchUserData();
    setUsername("");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="Procurar usuário"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao buscar usuário: {error.message}</p>}
      <ul>
        {userData &&
          userData.map((user, index) => (
            <li key={index}>
              <GithubUserItem userData={user} />
            </li>
          ))}
      </ul>
    </div>
  );
}
