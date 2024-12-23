import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useForm } from "react-hook-form";
import { setmessage } from "../app/messages";
import { useParams } from "react-router-dom";
import React from 'react'
const Chatinbox = () => {
  const {name}=useParams()
  const message = useSelector((state) => state.message);
  const user = useSelector((state) => state.user);
 
  const {register, handleSubmit} = useForm()
 
  const dispatch = useDispatch();
  function submit(data){
    document.querySelector('.chat').scrollTo(0, document.querySelector('.chat').scrollHeight)
     dispatch(setmessage([...message, {id: message.length + 1,user: true, content: data.message },
             
            ]))
            localStorage.setItem('message', JSON.stringify([...message, {id: message.length + 1,user: true, content: data.message },
             
            ]))
   }
 
  return (
    <div className="md:px-[100px] px-2">
      <div className="flex text-[1.6rem] flex-col gap-10">
        <Nav />
        <h1 className='text-[4.7rem]'>{name}</h1>
        
      <div className='flex  chat pt-10 h-[50vh] overflow-y-scroll overflow-x-hidden  shadow-sm px-10 flex-col gap-10'>
        {
          message.map(m=>{
            return (
              <div key={m.id} className={`px-2 max-w-[40%] bg-blue-200 ${ !m.user?"self-start  rounded-bl-none rounded-xl": "self-end  rounded-br-none rounded-xl flex flex-col bg-green-200" }`}>
 <p className="text-[1.3rem]">{m.user? user.name: name}</p>
 <p   className="text-[2rem] " >{m.content}</p>
        
              </div>
             
            )
          })
        }
 
</div>
    <div className="flex gap-6">
     <input
     {...register("message")}
          placeholder="መልእክትዎን ይጻፉ"
          type="text"
          className="border rounded-lg w-full  p-6 text-[1.4rem] border-gray-400"
        />
        
         <button  onClick={handleSubmit(submit)} className="bg-main msg rounded-lg text-white py-3 px-10">ላክ</button>
     </div>
      <Footer />
      </div>
    </div>
  );
};

export default Chatinbox;
