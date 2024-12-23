import Nav from "../components/Nav";
import React from 'react'
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Messages = () => {
  const conversations = [
    { id: 1, user: "ብሩክ", lastMessage: "ታዲያስ እንዴት ነህ?", stat: true },
    { id: 2, user: "ኪሩቤል", lastMessage: "በቅርቡ እንገናኝ!", stat: true },
    {
      id: 3,
      user: "ዳዊት",
      lastMessage: "ዳዊት ይህን ሊንክ ተመልከት። በሩስት ፕሮግራሚንግ ቋንቋ ላይ ያለ ቪዲዮ ነው።",
      stat: false,
    },
    {
      id: 4,
      user: "ክፍል ቢ",
      lastMessage: "ነገ አጋማሽ ፈተና አለ። እንዳትቀሩ።",
      stat: false,
    },
  ];

  return (
    <div className="md:px-[100px] px-2">
      <div className="flex text-[1.6rem] flex-col gap-10">
        <Nav />
        <h1 className="text-[4.7rem]">መልእክቶች</h1>
        <div className="flex shadow-sm px-10 flex-col">
          {conversations.map((c) => {
            return (
            <Link  to={`/chat/${c.user}`}   key={c.id}>  <div
              
             
                className={`flex py-10 ${
                  !c.stat && "bg-gray-200"
                } border-b-2 border-opacity-40 border-b-gray-500 justify-between items-center  gap-4 px-10`}
              >
                <div className="flex flex-col">
                  <div className="flex gap-8">
                    <div className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center text-white">
                      {c.user.substring(0, 1)}
                    </div>
                    <h1>{c.user}</h1>
                  </div>
                  <h1>{c.lastMessage}</h1>
                </div>
                {c.stat ? <BiVolumeFull /> : <BiVolumeMute />}
              </div>
              </Link> );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Messages;
