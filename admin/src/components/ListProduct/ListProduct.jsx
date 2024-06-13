import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAllproducts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/removeproduct/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchInfo(); // Refresh the list after deletion
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <h1>All Products List</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />
      {allproducts.map((product, index) => (
        <div key={index}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <p>{product.name}</p>
          <p>${product.old_price}</p>
          <p>${product.new_price}</p>
          <p>{product.category}</p>
          <img src={cross_icon} />
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
