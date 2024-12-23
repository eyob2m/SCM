import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React from 'react'
const ProfileEdit = () => {
    const user = useSelector((state) => state.user);
  return (
    
    <div className="md:px-[100px] px-2">
      <div className="flex text-[1.6rem] flex-col gap-10">
        <Nav />
        <h1 className='text-[4.7rem]'>መረጃን ቀይር</h1>
      <div className='flex shadow-sm px-10 flex-col gap-10'>
         
          
           <input
           defaultValue={user.name}
          placeholder="የተጠቃሚ ስም"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
         <input
          defaultValue={user.email}
          placeholder="ኢሜይል"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
         <input
          placeholder="የይለፍ ቃል"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
         <textarea
          placeholder="ስለ እኔ"
          type="text"
          className="border rounded-lg w-full h-[100px] p-6 text-[1.4rem] border-gray-400"
        />
         <button className="bg-main text-white py-3">ለውጦችን መዝግብ</button>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default ProfileEdit;
