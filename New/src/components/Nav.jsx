import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setanony } from "../app/anony";
import React from 'react'
const Nav = () => {
    const navigate = useNavigate();
  function postType() {
    dispatch(setanony(!anony));
    navigate("/");
  }
  const dispatch = useDispatch();
  const [menu, setmenu] = useState(false);
  const anony = useSelector((state) => state.anony);
  return (
    <nav className="flex text-[2rem] items-center justify-between bg-main text-white py-8 px-5">
      <Link to={"/"}>
        {" "}
        <h1>ኢትዮግራም</h1>
      </Link>
      <ul className="md:flex hidden gap-10">
        <Link to={"/"}>
          <li>መነሻ</li>
        </Link>
        <Link to={"/profile"}>
          <li>መግለጫ</li>
        </Link>
        <Link to={"/messages"}>
          <li>መልእክቶች</li>
        </Link>
        <Link to={"/notifications"}>
          <li>ማስታወቂያዎች</li>
        </Link>
        <Link to={"/settings"}>
          <li>መረጃን ቀይር</li>
        </Link>
        {/* <Link to={"/aiassistant"}>
          <li>ኤአይ ረዳት</li>
        </Link> */}

       <div onClick={() => postType()} className="flex flex-col ">
       <li className={`${anony&& "text-blue-300"} h-[50%] text-xl cursor-pointer`} >
          በድብቅ ያጋሩ
        </li>
        <div className="bg-gray-200 w-[70%] self-center rounded-full relative h-[50%]">
          <div className={`absolute ${anony ? "right-0 bg-blue-500" : "bg-gray-400 left-0"} top-0 rounded-full h-full w-[50%] `}></div>
        </div>
       </div>
        <Link to={"/control"}>
          <li>ገደብ አበጅ</li>
        </Link>
      </ul>

      <div className="md:hidden relative flex">
        <BiMenu
          onClick={() => {
            setmenu(!menu);
          }}
          className="text-white "
        />
        {menu && (
          <ul className="absolute right-0 p-4 bg-main translate-y-[100%] bottom-0 gap-10">
            <Link to={"/"}>
              <li>መነሻ</li>
            </Link>
            <Link to={"/profile"}>
              <li>መግለጫ</li>
            </Link>
            <Link to={"/messages"}>
              <li>መልእክቶች</li>
            </Link>
            <Link to={"/notifications"}>
              <li>ማስታወቂያዎች</li>
            </Link>
            <Link to={"/setting"}>
              <li>መረጃን ቀይር</li>
            </Link>
            {/* <Link to={"/aiassistant"}>
              <li>ኤአይ ረዳት</li>
            </Link> */}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
