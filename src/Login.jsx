import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Login successful: " + email);
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={pass}
        onChange={(e) => setPass(e.target.value)} required />
      <button>Login</button>
    </form>
  );
}
