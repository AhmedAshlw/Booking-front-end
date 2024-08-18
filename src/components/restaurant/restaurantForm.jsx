const ResForm = () => {
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
    console.log("Restaurant created");
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
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Ratting:</label>
          <input
            type="text"
            id="rating"
            value={rating}
            name="rating"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            name="category"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="operatingHours">operatingHours:</label>
          <input
            type="text"
            id="operatingHours"
            value={operatingHours}
            name="operatingHours"
            onChange={handleChange}
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Create Restaurant</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default ResForm;
