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
      const response = await fetch(`http://localhost:4000/removeproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
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
    <div className="flex flex-col items-center w-[100%] h-[740px] px-[10px] py-[50px] rounded-md bg-white">
      <h1 className="text-2xl mb-[20px]">All Products List</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-[10px] w-[100%] px-[20px] py-[0px] text-[#454545] text-[18px] font-semibold max-sm:text-xs">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />
      {allproducts.map((product, index) => (
        <div
          className="items-center font-semibold grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-[15px] w-[100%] px-[20px] py-[20px] text-[#454545] max-sm:text-[13px] text-[18px]"
          key={index}>
          <img
            className="h-[80px]"
            src={product.image}
            alt={product.name}
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <p>{product.name}</p>
          <p>${product.old_price}</p>
          <p>${product.new_price}</p>
          <p>{product.category}</p>
          <img
            onClick={() => removeProduct(product.id)}
            className="cursor-pointer m-auto"
            src={cross_icon}
            alt="Remove"
          />
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
