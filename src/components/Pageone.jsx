import React from "react";

function Pageone({ values, index, invertState }) {
  const { name, profession, img, friend } = values;
  return (
    <div className="w-52 rounded-2xl overflow-hidden">
      <div className="w-full h-44 bg-slate-50">
        <img
          className="object-cover w-full h-full object-top"
          src={img}
          alt=""
          srcSet=""
        />
      </div>
      <div className="w-full p-2 bg-gray-300">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h3 className="text-lg ">{profession}</h3>
        <button
          onClick={() => invertState(index)}
          className={` p-2 mt-2 text-sm font-semibold rounded-2xl ${
            friend ? `bg-blue-200` : `bg-pink-200`
          }`}
        >
          {friend ? `connected` : `connect`}
        </button>
      </div>
    </div>
  );
}

export default Pageone;
