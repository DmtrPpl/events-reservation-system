import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import google from "../styles/assetsAuthorization/google.png";
import facebook from "../styles/assetsAuthorization/facebook.png";
import { ReactComponent as Logo } from "../styles/assetsAuthorization/logo.svg";
import { ReactComponent as Email } from "../styles/assetsAuthorization/email.svg";
import { ReactComponent as Password } from "../styles/assetsAuthorization/password.svg";
import axios from "axios";
import Cookies from "js-cookie";
import Helmet from "../Helmet/Helmet";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; 
    axios.defaults.withCredentials = true; 
    axios.defaults.withXSRFToken = true; 
    axios.get('http://ec2-16-171-116-185.eu-north-1.compute.amazonaws.com:3000/sanctum/csrf-cookie') 
    .then(res => { 
      axios.post('http://ec2-16-171-116-185.eu-north-1.compute.amazonaws.com:3000/login', { 
        email: email, 
        password: password
      }) 
      .then(resp => { 
        console.log(resp);
        navigate('/home');
      })
      .catch(e => {
        console.log(e);
      })
  })

    
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Helmet title='Login'>
    <div>
      <div className="background"></div>
      <div className="centering">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="signin-welcome-row">
            <Logo className="logo" />
            <h1>Sign In!</h1>
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

            <input type="submit" className="my-form__button" value="Sign-In" />
          </div>
          <div className="my-form__actions">
            <div className="my-form__row">
              <span>Did you forget your password?</span>
              <Link to="#" title="Reset Password">
                Reset Password
              </Link>
            </div>
            <div className="my-form__signin">
              <Link to="/signup" title="Sign Up">
                Sign-Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Helmet>
  );
};

export default Login;