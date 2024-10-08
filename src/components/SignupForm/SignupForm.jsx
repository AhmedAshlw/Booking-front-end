// SignupForm.jsx
import * as authService from "../../services/authService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupForm.css";
import Restaurant from "../restaurant/restaurant";
const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
    email: "",
    commercialRegistrationNumber: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await authService.Signup(formData);
      props.setUser(newUserResponse.user);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const {
    username,
    password,
    passwordConf,
    email,
    commercialRegistrationNumber,
  } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf && email);
  };

  return (
    <main className="signOutCont">
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="commercialRegistrationNumber">CRN</label>
          <input
            type="number"
            id="commercialRegistrationNumber"
            value={commercialRegistrationNumber}
            name="commercialRegistrationNumber"
            onChange={handleChange}
          />
        </div>
        <div>
          <button disabled={isFormInvalid()} className="btn1">
            Sign Up
          </button>
          <Link to="/">
            <button className="btn1">Back</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignupForm;
