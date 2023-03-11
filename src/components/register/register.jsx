import React from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const user = {
    FirstName,
    LastName,
    Email,
    Password,
    ConfirmPassword,
  };
  console.log(user);

  return (
    <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">First name</label>
        <input
          className="form__field"
          type="text"
          placeholder="First name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Last name</label>
        <input
          className="form__field"
          type="text"
          placeholder="Last name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input
          className="form__field"
          type="text"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Choose password</label>
        <input
          className="form__field"
          type="password"
          placeholder="Choose password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Confirm Password</label>
        <input
          className="form__field"
          type="password"
          placeholder="Confirm Password"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Register" />
      </div>

      <footer>
        Already have an account? <Link to="/login">Login</Link>
      </footer>
    </form>
  );
}
