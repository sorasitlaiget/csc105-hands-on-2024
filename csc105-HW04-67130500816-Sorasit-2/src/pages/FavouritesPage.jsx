import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FavouritesPage = () => {
  const [number, setNumber] = useState("");
  const [q, setQ] = useState("");
  const [size, setSize] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!number || isNaN(number) || number < 1 || number > 100) {
      newErrors.number = "Enter a number between 1 and 100";
    }
    if (q !== "love" && q !== "like") {
      newErrors.q = "Select either 'love' or 'like'";
    }
    if (!["small", "medium", "large"].includes(size)) {
      newErrors.size = "Select a valid size";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate(`/favoritedetail/${number}?q=${q}&size=${size}`);

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold text-center">Favourites Page</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block mb-2">Number:</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}

          <label className="block mt-4">Q:</label>
          <select className="w-full p-2 border rounded" value={q} onChange={(e) => setQ(e.target.value)}>
            <option value="">Select</option>
            <option value="love">Love</option>
            <option value="like">Like</option>
          </select>
          {errors.q && <p className="text-red-500 text-sm">{errors.q}</p>}

          <label className="block mt-4">Size:</label>
          <select className="w-full p-2 border rounded" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}

          <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FavouritesPage;
