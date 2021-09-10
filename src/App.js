import react, { useState } from "react";
import './App.css';
import Form from "./components/form";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="App">
      <div>
        <form onSubmit={() => { }}>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          {firstName.length < 2 ? (<p>First Name must be at least 2 characters</p>) : null}
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </div>
          {lastName.length < 2 ? (<p>Last Name must be at least 2 characters</p>) : null}
          <div>
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          {email.length < 5 ? (<p>Email must be at least 5 characters</p>) : null}
          <div>
            <label htmlFor="">Password</label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </div>
          {password.length < 8 ? (<p>Password must be at least 8 characters</p>) : null}
          <div>
            <label htmlFor="">Confirm Password</label>
            <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          {confirmPassword !== password ? <p>Passwords must match</p> : null}
        </form>
        <h1>Your Form Data</h1>

        <h3>First Name :</h3>
        <span>{firstName}</span>

        <h3>Last Name :</h3>
        <span>{lastName}</span>

        <h3>Email :</h3>
        <span>{email}</span>

        <h3>Password :</h3>
        <span>{password}</span>

        <h3>Confirm Password :</h3>
        <span>{confirmPassword}</span>
      </div>
    </div>
  );
}

export default App;