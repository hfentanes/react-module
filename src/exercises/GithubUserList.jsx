import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/GithubUserList.css";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.github.com/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <h2>Carregando...</h2>;
  if (error) return <h2>Erro ao carregar usuários: {error.message}</h2>;

  const halfLength = Math.ceil(users.length / 2);
  const firstColumnUsers = users.slice(0, halfLength);
  const secondColumnUsers = users.slice(halfLength);

  return (
    <div className="container">
      <div className="user-list">
        <div className="column">
          <ul>
            {firstColumnUsers.map((user) => (
              <li key={user.id}>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <ul>
            {secondColumnUsers.map((user) => (
              <li key={user.id}>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="user-details">
        <Outlet />
      </div>
    </div>
  );
}
