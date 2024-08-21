const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const index = async () => {
  try {
    const res = await fetch(`${BASE_URL}/restaurants`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const res = await fetch(`${BASE_URL}/restaurants`, options);

  return res.json();
};

const show = async (resId) => {
  try {
    const res = await fetch(`${BASE_URL}/restaurants/${resId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const update = async (resId, formData) => {
  try {
    const res = await fetch(`${BASE_URL}/restaurants/${resId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteRes = async (resId) => {
  try {
    const res = await fetch(`${BASE_URL}/restaurants/${resId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const AddRating = async (resId, ratingFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/restaurants/${resId}/rating`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index, create, show, update, deleteRes, AddRating };
