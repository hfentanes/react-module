import useLoginForm from "../hooks/useLoginForm";

export default function Login() {
  const { data, handleChange } = useLoginForm();

  function handleLogin(event) {
    event.preventDefault();
    console.log("Login data:", data);
  }

  function handleReset() {
    const { data: initialData, handleChange: resetForm } = useLoginForm();
    resetForm();
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          type="text"
          value={data.username}
          placeholder="Enter username"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          value={data.password}
          placeholder="Enter password"
          onChange={handleChange}
        />

        <label>
          Remember Me
          <input
            name="remember"
            type="checkbox"
            checked={data.remember}
            onChange={handleChange}
          />
        </label>

        <button disabled={!data.username || !data.password} type="submit">
          Login
        </button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}
