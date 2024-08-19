import { useState } from "react";

const ResForm = ({handleAddRestaurant}) => {
  const [restrData, setRestrData] = useState({
    name: "",
    rating: "",
    category: "",
    operatingHours: "",
  });

  const handleChange = (e) => {
    setRestrData({ ...restrData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAddRestaurant(restrData);
  };

  return (
    <main>
      <h1>New Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={restrData.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Ratting:</label>
          <input
            type="text"
            id="rating"
            value={restrData.rating}
            name="rating"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={restrData.category}
            name="category"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="operatingHours">operatingHours:</label>
          <input
            type="text"
            id="operatingHours"
            value={restrData.operatingHours}
            name="operatingHours"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create Restaurant</button>
        </div>
      </form>
    </main>
  );
};

export default ResForm;
