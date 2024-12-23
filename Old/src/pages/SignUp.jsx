import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import React from 'react'
const Signup = () => {
    const navigate = useNavigate()
    function submit (data){
         let users =  JSON.parse(localStorage.getItem('users')) || []
       users.push({...data,pt: 0})
         localStorage.setItem('users',JSON.stringify(users))
         navigate('/login')
    }
     const {register,handleSubmit} = useForm()
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="shadow-md w-[350px] px-20 py-20 flex flex-col gap-10">
        <h1 className="text-[4.7rem]">መመዝገቢያ</h1>
        <input
          {...register('name')}
          placeholder="የተጠቃሚ ስም"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
        <input
        {...register('email')}
          placeholder="ኢሜይል"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
        <input
         {...register('password')}
          placeholder="የይለፍ ቃል"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
           <button onClick={handleSubmit(submit)} className="w-full bg-main text-white py-3">ይመዝገቡ</button>
         
              <Link to={'/login'}><h1 className="underline text-[1.2rem] text-main">አካውንት አለዎት?</h1></Link>
 
      </div>
    </div>
  );
};

export default Signup;
