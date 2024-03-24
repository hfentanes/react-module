import useSWR from "swr";

export default function useGithubUser(username) {
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return response.json();
  };

  const {
    data: userData,
    error,
    isValidating: loading,
    mutate: fetchUserData,
  } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const refetchUserData = () => {
    fetchUserData();
  };

  return { userData, loading, error, refetchUserData };
}
