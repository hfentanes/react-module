import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    const API_URL = "https://api.github.com/users";
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${username}`);
      const data = await response.json();
      const newUserData = userData;

      newUserData.push(data);
      setUserData([...newUserData]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, []);

  return { userData, loading, error, fetchUserData };
}
