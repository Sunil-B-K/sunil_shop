import React, { useState } from "react";
import "./CSS/LoginSignup.css";

function LoginSignup() {
  const [state, setstate] = useState("Login");
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeInput = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("loged", formData);
    let responseData;
    await fetch("https://e-backend-jkn8.onrender.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("Auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log("signed", formData);
    let responseData;
    await fetch("https://e-backend-jkn8.onrender.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("Auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="login">
      <div className="l-container">
        <h1>{state}</h1>
        <div className="l-fields">
          {state === "Sign Up" ? (
            <input
              onChange={changeInput}
              value={formData.name}
              type="text"
              placeholder="your name"
              name="name"
              required
            />
          ) : (
            <></>
          )}
          <input
            onChange={changeInput}
            value={formData.email}
            type="email"
            placeholder="your email"
            name="email"
            required
          />
          <input
            onChange={changeInput}
            value={formData.password}
            type="password"
            placeholder="your password"
            name="password"
            required
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="login-signuptext">
            {" "}
            already have account?
            <span
              onClick={() => {
                setstate("Login");
              }}
            >
              login here
            </span>
          </p>
        ) : (
          <p className="login-signuptext">
            {" "}
            Create an account?
            <span
              onClick={() => {
                setstate("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="l-agree">
          <input type="checkbox" id="" />
          <p>Continue with Agree of conadtion and privacy police</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
