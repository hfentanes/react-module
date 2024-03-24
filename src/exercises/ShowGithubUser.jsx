import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ShowGithubUser.css";

export default function ShowGithubUser() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [username]);

  if (loading) return <h2>Carregando...</h2>;
  if (error) return <h2>Erro ao carregar usuário: {error.message}</h2>;
  if (!userData) return null;

  return (
    <div className="show-github-user-container">
      <h3>Informações de Usuário</h3>
      <img src={userData.avatar_url} alt={userData.login} />
      <p>
        <b>Nome:</b> {userData.name}
      </p>
      <p>
        <b>Usuário:</b> {userData.login}
      </p>
      <p>
        <b>Companhia:</b> {userData.company}
      </p>
      <p>
        <b>Blog:</b> {userData.blog}
      </p>
      <p>
        <b>Localização:</b> {userData.location}
      </p>
      <p>
        <b>Biografia:</b> {userData.bio}
      </p>
    </div>
  );
}
