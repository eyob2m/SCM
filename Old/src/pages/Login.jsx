import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../app/userSlice";
import React from 'react'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function submit(data) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length == 0) {
      setError("email", { message: "user does not exist" });
    }
    users.map((u) => {
      if (u.email == data.email && u.password == data.password) {
        dispatch(setUser(u));
        localStorage.setItem("user", JSON.stringify(u));
        return navigate("/");
      } else {
        setError("email", { message: "email or password is incorrect" });
      }
    });
  }
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="shadow-md w-[350px] px-20 py-20 flex flex-col gap-10">
        <h1 className="text-[4.7rem]">መግቢያ</h1>

        <input
          {...register("email")}
          placeholder="ኢሜይል"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
        <input
          {...register("password")}
          placeholder="የይለፍ ቃል"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
        {errors.email && (
          <h1 className="text-red-500">{errors.email.message}</h1>
        )}

        <Link to={"/welcome"}>
          {" "}
          <button
            onClick={handleSubmit(submit)}
            className="bg-main w-full text-white py-3"
          >
            ግባ
          </button>
        </Link>

        <Link to={"/signup"}>
          <h1 className="underline text-[1.2rem] text-main">አካውንት የለዎትም?</h1>
        </Link>
      </div>
    </div>
  );
};

export default Login;
