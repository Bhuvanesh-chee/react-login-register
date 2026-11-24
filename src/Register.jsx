import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Registered: " + name);
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={pass}
        onChange={(e) => setPass(e.target.value)} required />
      <button>Register</button>
    </form>
  );
}
