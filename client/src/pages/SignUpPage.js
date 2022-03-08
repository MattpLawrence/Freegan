import React, { useState, useEffect } from "react";
import "../styles/signup.css";

function SignUpPage() {
  const [userInfo, setUserInfo] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [valid, setValid] = useState("");
  const [passText, setPassText] = useState("");

  const handleChange = async (e) => {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setRePassword(e.target.value);
      // Validate();
    }
  };
  function submitForm(e) {
    e.preventDefault();
    if (password !== rePassword) {
      console.log("dont match");
    } else {
      setUserInfo({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setRePassword("");
    }
  }
  let validation = "";
  // function Validate() {
  useEffect(() => {
    if (rePassword.length === 0) {
    } else {
      if (password === rePassword) {
        setValid("valid");
        setPassText("Passwords Match");
        console.log(valid);
      } else {
        setValid("notValid");
        setPassText("Passwords Do Not Match");
        console.log(`not ${valid}`);
      }
    }
  });
  // }

  return (
    <div>
      <div className="container signUpContainer">
        <div className="row">
          <form className="col s12" id="reg-form" onSubmit={submitForm}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  value={firstName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  value={lastName}
                  required
                  onChange={handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  required
                  value={email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  minLength="6"
                  required
                  value={password}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="rePassword"
                  type="password"
                  className="validate"
                  minLength="6"
                  required
                  value={rePassword}
                  onChange={handleChange}
                />
                <label htmlFor="rePassword">Re-Enter Password</label>
                <a className={valid}>{passText}</a>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button
                  className="btn btn-large btn-register waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Register
                  <i className="material-icons right">done</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
