import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState(null);

  function handleLogin(event) {
    event.preventDefault();
    setUser(username);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
