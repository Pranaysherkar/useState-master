import React, { useState } from "react";
import Pageone from "./components/Pageone";

function App() {
  const Rawdata = [
    {
      name: "John",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww",
      profession: "Engineer",
      friend: false,
    },
    {
      name: "Alice",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww",
      profession: "Doctor",
      friend: false,
    },
    {
      name: "Bob",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      profession: "Teacher",
      friend: false,
    },
    {
      name: "Emite",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      profession: "Artist",
      friend: false,
    },
    {
      name: "Michael",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      profession: "Scientist",
      friend: false,
    },
  ];
  const[data,setdata] = useState(Rawdata);
  const invertState = (dataindex)=>{
    return setdata((prev)=>
    prev.map((item,index)=>{
      if(dataindex===index)return{...item,friend: !item.friend};
      return(item);
    }
    )
    )
  }

  return (
    <>
      <div className="w-full h-screen bg-slate-400  flex gap-4 items-center justify-center ">
        {data.map((item, index) => (
          <Pageone
            key={index}
            values={item}
            index={index}
            invertState={invertState}
          />
        ))}
      </div>
    </>
  );
}

export default App;
