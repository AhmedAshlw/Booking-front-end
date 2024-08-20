const BASE_URL = "http://localhost:3000/restaurants";

const create = async (formData, resId) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const res = await fetch(`${BASE_URL}/${resId}/Booking`, options);
  // const res = await fetch(
  //   `${BASE_URL}/restaurants/66c1bf091cb12e3322267b95/Booking`,
  //   options
  // );
  return res.json();
};

export { create };
