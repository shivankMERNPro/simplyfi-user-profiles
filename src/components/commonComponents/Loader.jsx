import React from "react";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
      <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md text-center">
        <div className="text-6xl mb-4 animate-spin-slow">⏳</div>
        <p className="text-gray-800 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
