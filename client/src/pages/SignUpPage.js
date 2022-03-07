import React, { useState } from "react";
import "../styles/signup.css";

function SignUp() {
  const [userInfo, setUserInfo] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
      console.log(firstName);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
      console.log(lastName);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
      console.log(email);
    } else {
      setPassword(e.target.value);
      console.log(password);
    }
  }

  return (
    <div>
      <div className="container signUpContainer">
        <div className="row">
          <form className="col s12" id="reg-form">
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

export default SignUp;
