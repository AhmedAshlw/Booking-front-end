// src/services/authService.js

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Signup = async (formData) => {
  console.log("inside service");
  try {
    const res = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log("res ", res);
    const json = await res.json();
    if (json.err) {
      throw new Error(json.err);
    }
    return json;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
// src/services/authService.js

const signin = async (user) => {
  try {
    const res = await fetch(`${BASE_URL}/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const json = await res.json();

    if (json.token) {
      localStorage.setItem("token", json.token); // add this line to store the JWT token in localStorage

      const user = JSON.parse(atob(json.token.split(".")[1]));

      return user;
    }
    if (json.err) {
      throw new Error(json.err);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const user = JSON.parse(atob(token.split(".")[1]));
  return user;
};

const signout = () => {
  localStorage.removeItem("token");
};

export { Signup, signin, getUser, signout };
