import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import React from 'react'
import { Link} from "react-router-dom";


const Nav = () => {
   
  const [menu, setmenu] = useState(false);

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
