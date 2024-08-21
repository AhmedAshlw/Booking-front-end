// src/services/authService.js

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const parseToken = (token) => {
  if (!token) return null;

  try {
    const rawPayload = token.split(".")[1];
    const jsonPayload = window.atob(rawPayload);

    const payload = JSON.parse(jsonPayload);
    return payload;
  } catch (error) {
    return null;
  }
};

const Signup = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
    if (json.token) {
      localStorage.setItem("token", json.token);
    }
    const user = parseToken(json.token);
    return { user };
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
