import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import the Link component
import "../styles/signup.css";

import google from "../styles/assetsAuthorization/google.png";
import facebook from "../styles/assetsAuthorization/facebook.png";
import { ReactComponent as Logo } from "../styles/assetsAuthorization/logo.svg";
import { ReactComponent as Username } from "../styles/assetsAuthorization/username.svg";
import { ReactComponent as Email } from "../styles/assetsAuthorization/email.svg";
import { ReactComponent as Password } from "../styles/assetsAuthorization/password.svg";
import axios from "axios";
import Cookies from "js-cookie";
import Helmet from "../Helmet/Helmet";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };
*/ //const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    axios.get('http://ec2-16-171-116-185.eu-north-1.compute.amazonaws.com:3000/sanctum/csrf-cookie')
    .then(res => {
      axios.post('http://ec2-16-171-116-185.eu-north-1.compute.amazonaws.com:3000/register', {
        name: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      })
      .then(resp => {
        console.log(resp);
        navigate('/login');
      }) 
  })
  //   fetch('http://ec2-16-171-116-185.eu-north-1.compute.amazonaws.com:3000/sanctum/csrf-cookie',
  //   {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //   })
  //   .then(res => {

  //   });
  //     let xsrftoken = Cookies.get("XSRF-TOKEN");
  //     axios.post('http://ec2-16-171-116-185.eu-north-1.compute.amazonaws.com:3000/register', {
  //         name: username,
  //         email: email,
  //         password: password,
  //         password_confirmation: confirmPassword
  //       }, {
  //         withXSRFToken: true
  //       })
  //     .then(resp => {
  //       console.log(resp);
  //     }) 
  // };

  
};

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Helmet title='Signup'>
    <div>
      <div className="background"></div>
      <div className="centering">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="signup-welcome-row">
            <Logo className="logo" />
            <h1>Sign Up!</h1>
          </div>
          <div className="socials-row">
            <Link to="#" title="Use Google">
              <img src={google} alt="Google" />
              Use Google
            </Link>
            <Link to="#" title="Use Facebook">
              <img src={facebook} alt="Facebook" />
              Use Facebook
            </Link>
          </div>
          <div className="divider">
            <div className="divider-line"></div>
            OR
            <div className="divider-line"></div>
          </div>
          <div className="my-form__content">
            <div className="text-field">
              <label htmlFor="username">
                Username:
                <input
                  aria-label="Username"
                  type="username"
                  id="username"
                  name="username"
                  placeholder="Your Username"
                  autoComplete="off"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Username />
              </label>
            </div>
            <div className="text-field">
              <label htmlFor="email">
                Email:
                <input
                  aria-label="Email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Email />
              </label>
            </div>
            <div className="text-field">
              <label htmlFor="password">
                Password:
                <input
                  aria-label="Password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  autoComplete="off"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Password />
              </label>
            </div>
            <div className="text-field">
              <label htmlFor="confirm-password">
                Confirm Password:
                <input
                  aria-label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <Password />
              </label>
            </div>
            <input type="submit" className="my-form__button" value="Sign-Up" />
          </div>
          <div className="my-form__actions">
            <div>
              By registering you agree to our{" "}
              <Link to="#" title="Terms">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="#" title="Privacy">
                Privacy
              </Link>
            </div>
            <div className="my-form__signin">
              <Link to="/login" title="Sign In">
                Sign-in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Helmet>
  );
};

export default Signup;
