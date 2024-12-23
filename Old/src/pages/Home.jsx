import { BiLike, BiMessage, BiShare } from "react-icons/bi";
import Nav from "../components/Nav";
import Homefooter from "../components/Homefooter";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setpost } from "../app/postSlice";
import React from 'react'
const Home = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=>{
            let time = +(localStorage.getItem('blocked') || Date.now())-1000
            console.log(time,Date.now())
            if( time>Date.now()) {
                navigate('/blocked')
            }
    },[])
 
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);

  function submit(data) {
   if(data.content!=""){
   
        setPosts([
          { id: posts.length + 1, user: user.name, content: data.content },
          ...posts,
        ]);
        dispatch(setpost([
          { id: posts.length + 1, user: user.name, content: data.content },
          ...posts,
        ]))
        localStorage.setItem('post', JSON.stringify([
          { id: posts.length + 1, user: user.name, content: data.content },
          ...posts,
        ]))
      }
   }
  
  const { register, handleSubmit } = useForm();
  const [posts, setPosts] = useState(post);
  return (
    <div className="md:px-[100px] w-full px-2">
      <div className="flex w-full text-[1.6rem] flex-col gap-10">
        <Nav />
        <textarea
          {...register("content")}
          placeholder="ምን እያሰቡ ነው?"
          type="text"
          className="border rounded-lg w-full h-[100px] p-6 text-[1.4rem] border-gray-400"
        />
        <button
          onClick={handleSubmit(submit)}
          className="bg-main text-white w-fit px-8 py-2 rounded-lg"
        >
          {"ፖስት ያድርጉ"}
        </button>
        {posts.map((p) => {
          return (
            <div
              key={p.id}
              className="flex flex-col py-6 gap-4 shadow-sm px-10"
            >
              <div className="flex gap-8">
                <div className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center text-white">
                  {p.user ? p.user.substring(0, 1) : "U"}
                </div>
                <h1>{p.user ? p.user : "User"}</h1>
              </div>
              <h1>{p.content}</h1>
              <div className="flex gap-6">
                <BiLike />
                <BiMessage />
                <BiShare />
              </div>
            </div>
          );
        })}

        <Homefooter />
      </div>
    </div>
  );
};

export default Home;
