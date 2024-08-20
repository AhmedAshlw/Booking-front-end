const BASE_URL = "http://localhost:3000";
//creaiting book
const create = async (formData, resId) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const res = await fetch(`${BASE_URL}/restaurants/${resId}/Booking`, options);
  // const res = await fetch(
  //   `${BASE_URL}/restaurants/66c1bf091cb12e3322267b95/Booking`,
  //   options
  // );
  return res.json();
};
//show all user books
const index = async () => {
  try {
    const res = await fetch(`${BASE_URL}/booking`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
//show all booking for a restaurants Owners
const resBook = async (resId) => {
  try {
    const res = await fetch(`${BASE_URL}/restaurants/${resId}/Booking`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export { create, index, resBook };
