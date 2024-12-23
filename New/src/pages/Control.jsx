import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../app/userSlice";
import React from 'react'
const Control = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function submit(data) {
    let users = JSON.parse(localStorage.getItem("users"));
    let nu = [];
    users.map((u) => {
      if (u.id == user.id) {
        let uu = { ...u, pt: u.pt + data.for*50 };
        localStorage.setItem("user", JSON.stringify(uu));
        dispatch(setUser(uu));
        nu.push(uu);
      } else {
        nu.push(u);
      }
    });

    localStorage.setItem("users", JSON.stringify(nu));
    setTimeout(() => {
      let time = +Date.now() + data.for * 1000;
      localStorage.setItem("blocked", time);
      navigate("/blocked");
    }, data.upto * 1000);
    navigate("/");
  }
  return (
    <div className="px-[100px]">
      <div className="flex text-[1.6rem] flex-col gap-10">
        <Nav />
        <h1 className="text-[4.7rem]">ገደብ</h1>
        <div className="flex shadow-sm px-10 flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1>የእንቅስቃሴ ጊዜ ማብቂያ</h1>

            <input
              {...register("upto")}
              placeholder="(በሴኮንድ)"
              type="number"
              className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1>የገደብ ጊዜ ርዝመት</h1>

            <input
              {...register("for")}
              placeholder="(በሴኮንድ)"
              type="number"
              className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
            />
          </div>
          <div className="flex gap-5">
            <input type="radio" name="freq" />
            <h1>ለአንድ ጊዜ</h1>
          </div>
          <div className="flex gap-5">
            <input type="radio" name="freq" />
            <h1>ተደጋጋሚ</h1>
          </div>

          <button
            onClick={handleSubmit(submit)}
            className="bg-main text-white py-3"
          >
            ምርጫዎቹን መዝግብ
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Control;
