import React from 'react'
const Homefooter = () => {
  return (
    <footer className="flex  justify-between flex-col py-20  px-20 gap-16 opacity-80">
      <div className="flex justify-between">
        <div className="flex gap-4 flex-col items-start">
          {" "}
          <h1 className="text-[2rem] font-extrabold">ስለኛ</h1>{" "}
          <p>
            ኢትዮ ግራም ሰዎችን ለማገናኘት እና ለአእምሮ ደህንነት ድጋፍ ለመስጠት የተነደፈ የማህበራዊ ሚድያ መድረክ
            ነው።
          </p>{" "}
          <button className="text-main">ተጨማሪ መረጃ</button>
        </div>
        <div className="flex gap-4 flex-col items-start">
          {" "}
          <h1 className="text-[2rem] font-extrabold">አግኙን</h1>{" "}
          <p>ጥያቄዎች ወይም አስተያየቶች አሉዎት? መስማት እንፈልጋለን።</p>{" "}
          <button className="border border-gray-400 rounded-lg text-main px-8 py-4 ">
            የድጋፍ ቡድኑን ያነጋግሩ
          </button>
        </div>
      </div>
      <h1 className="self-center">የቅጂ መብት &copy; 2024 ኢትዮግራም </h1>
    </footer>
  );
};

export default Homefooter;
