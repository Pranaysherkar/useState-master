import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Pageone() {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [value, setvalue] = useState([
    { name: "pranay", gender: "male" },
    { name: "emale", gender: "female" },
    { name: "rodfu", gender: "female" },
    { name: "babu", gender: "male" },
  ]);
  const [val,setval]= useState(false);

  return (
    <>
      <div className="p-5 bg-zinc-300 ">
        {count.map((i) => (
          <h1 className=" font-bold ">{i}</h1>
        ))}
        <button
          className="bg-blue-400 p-2 mt-1.5 rounded-full "
          onClick={() => setCount([...count, 9])}
        >
          click me
        </button>
      </div>
      <div className="p-5 bg-zinc-300 ">
        {value.map((i) => (
          <div className="font-bold">
            <h1 className="font-bold">name: {i.name}</h1>
            <h1 className="font-bold">gender: {i.gender}</h1>
          </div>
        ))}
        <button
          className="bg-pink-200 p-2 m-2 rounded-2xl"
          onClick={() => setvalue(() =>value.map((item)=>item.name ==="emale" ? ({name:"zen",gender:"male"}): item))}
        >
          click here!
        </button>

      </div>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="relative flex w-1/4 h-1/4 overflow-hidden rounded-2xl">
          <img
            className={`.transition-transform duration-300 ease-linear shrink-0 w-full h-full object-cover rounded-2xl ${val===false ? "-translate-x-[0%]":"-translate-x-[100%]"}`}
            src="https://images.unsplash.com/photo-1581375074612-d1fd0e661aeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxmcnVpdHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <img
            className={`.transition-transform duration-300 ease-linear shrink-0 w-full h-full object-cover rounded-2xl ${val===false ? "-translate-x-[0%]":"-translate-x-[100%]"}`}
            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZydWl0fGVufDB8fDB8fHww"
            alt=""
          />
          <span  onClick={()=>setval(()=>!val)} className="cursor-pointer w-12 h-12 left-1/2 bottom-10 flex bg-[#ffffff86] items-center justify-center rounded-full absolute -translate-x-[50%] -translate-y-[50%] bg-zinc-100">
            <FaArrowRight size={".9em"} />
          </span>
        </div>
      </div>
    </>
  );
}

export default Pageone;
