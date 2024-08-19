const BASE_URL = "http://localhost:3000/restaurants/:resId/Booking";

const create = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const res = await fetch(BASE_URL, options);

  return res.json();
};

export { create };
