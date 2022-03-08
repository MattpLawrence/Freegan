import React, { useState } from "react";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState("");

  function submitForm(e) {
    e.preventDefault();

    setUserInfo({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  }

  const handleChange = async (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  return (
    <div>
      <div className="container signUpContainer">
        <div className="row">
          <form className="col s12" id="reg-form" onSubmit={submitForm}>
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
                  Log In
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
export default LoginPage;
