import React from "react";

function Header({ user, setUser }) {
  function handleLogout() {
    setUser('');
  }

  return (
    <>
      Welcome, {user}!
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Header;