import React from 'react'
import img from '../assets/1.jpg'
import Homefooter from "../components/Homefooter";
import Nav from '../components/Nav';
const Welcome = () => {
  return (
    <div className="md:px-[100px] px-2">
      <div className="flex text-[1.6rem] flex-col gap-10">
      
      <Nav />
      <h1 className=" self-center text-[8rem]">እንኳን ወደ ኢትዮፌስቡክ በደህና መጡ</h1>
      <h2 className="self-center text-[4rem] text-center">ኢትዮፌስቡክ ሰዎችን ለማገናኘት እና ለአእምሮ ደህንነት ድጋፍ ለመስጠት የተነደፈ የማህበራዊ ሚዲያ
      ነው።</h2>
      <div className="flex gap-14">
      <div className="flex flex-col rounded-2xl shadow-sm">
           <div className="h-[150px] w-full"><img src={img} className="h-full w-full object-cover rounded-2xl" alt="" /></div> 
        <div className="px-10">
        <h1  className="self-center text-center text-[3rem] font-semibold">ከጓደኞች ጋር ይገናኙ</h1>
            <h2 className="self-center text-center text-[1.7rem]">ከወደዱት ሰው ጋር በኢትዮፌስቡክ ላይ ይገናኙ እና እንደ ቤተሰብ ይሁኑ።</h2>
       </div> </div>
       <div className="flex flex-col rounded-2xl shadow-sm">
       <div className="h-[150px] w-full"><img src={img} className="h-full w-full object-cover rounded-2xl" alt="" /></div> 
       <div className="px-10">
        <h1  className="self-center text-center text-[3rem] font-semibold">ሃሳቦትን ያካፍሉን</h1>
            <h2 className="self-center text-centertext-[1.7rem]">እንዲሁም ማንኛውንም አካሄድ ያጋሩ እና አስተያየቶትን ያጋሩ።</h2>
       </div> </div><div className="flex flex-col rounded-2xl shadow-sm">
       <div className="h-[150px] w-full"><img src={img} className="h-full w-full object-cover rounded-2xl" alt="" /></div> 
       <div className="px-10">
        <h1  className="self-center text-center text-[3rem] font-semibold">ትክክለኛ መረጃዎችን ይቀበሉ</h1>
            <h2 className="self-center text-center text-[1.7rem]">ትክክለኛነታቸው የተረጋገጠ መረጃ ይቀበሉ እና የተሳሳተ መረጃን ይዋጉ።</h2>
       </div> </div>
      </div>
      <Homefooter />
    </div>
    </div>
  );
};

export default Welcome;
