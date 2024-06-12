import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      responseData = data;

      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);

        const productResponse = await fetch(
          "http://localhost:4000/addproduct",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        if (!productResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const productData = await productResponse.json();
        productData.success ? alert("Product added") : alert("Failed");
      } else {
        console.error("Upload failed:", responseData.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div
      className="flex flex-col gap-[2rem] box-border w-[100%] max-w-[800px] px-[30px] py-[50px]
    mx-[20px] my-[30px] rounded-md bg-white max-sm:w-fit">
      <div className="w-[100%] text-[#7b7b7b] text-xl">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          className="box-border w-[100%] h-[50px] rounded pl-[15px] border-[1px] border-[#c3c3c3] outline-none text-[#7b7b7b] text-xl "
          type="text"
          name="name"
          placeholder="Type Here"
        />
      </div>

      <div className="flex gap-[40px]">
        <div className="w-[100%] text-[#7b7b7b] text-xl">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            className="box-border w-[100%] h-[50px] rounded pl-[15px] border-[1px] border-[#c3c3c3] outline-none text-[#7b7b7b] text-xl "
            type="text"
            name="old_price"
            placeholder="Type Here"
          />
        </div>

        <div className="w-[100%] text-[#7b7b7b] text-xl">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            className="box-border w-[100%] h-[50px] rounded pl-[15px] border-[1px] border-[#c3c3c3] outline-none text-[#7b7b7b] text-xl "
            type="text"
            name="new_price"
            placeholder="Type Here"
          />
        </div>
      </div>

      <div className="w-[100%] text-[#7b7b7b] text-xl">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          className="p-[10px] w-[115px] h-[50px] text-[14px] text-[#7b7b7b] border-[1px] border-[#7b7b7b8d] rounded-md"
          name="category">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div>
        <label htmlFor="file-input">
          <img
            className="h-[120px] w-[120px] rounded-xl object-contain mx-[10px] my-[0px]"
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
        <button
          onClick={() => {
            Add_Product();
          }}
          className="w-[160px] mt-[20px] h-[45px] rounded-md bg-[#6079ff] border-none cursor-pointer text-white text-[16px] font-semibold">
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
