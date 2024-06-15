import React, { useState } from "react";
import { Button } from "../../components";

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setformData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) =>
      response.json().then((data) => (responseData = data))
    );

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) =>
      response.json().then((data) => (responseData = data))
    );

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#fce3fe] pt-[100px] max-sm:pt-[30px] font-poppins">
      <div className="w-[595px] h-[600px] bg-white m-auto  py-[30px] px-[50px]">
        <h1 className=" my-[20px] mx-[0px] font-semibold max-sm:py-[0px] ">
          {state}
        </h1>
        <div className=" flex flex-col gap-[30px] mt-[20px]">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              className=" h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className=" h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className=" h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => (state === "Login" ? login() : signup())}
          className=" w-[495px] h-[50px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-semibold cursor-pointer">
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className=" mt-[20px] text-[#5c5c5c] text-[18px] font-semibold">
            Already have an account ?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-[#ff4141] font-semibold">
              {" "}
              Login Here
            </span>
          </p>
        ) : (
          <p className=" mt-[20px] text-[#5c5c5c] text-[18px] font-semibold">
            Create an Account ?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-[#ff4141] font-semibold">
              Click Here
            </span>
          </p>
        )}

        <div className=" flex items-center mt-[25px] gap-[20px]  text-[#5c5c5c]  text-[18px] font-semibold whitespace-nowrap">
          <input type="checkbox" name="" id="" />
          <p className="">
            By continuing, I agree to terms of use and privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
