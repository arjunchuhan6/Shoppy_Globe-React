import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Notfound = () => {
  const err = useRouteError();
  const Navigate = useNavigate();
  const handleNavigateBack = () => {
    Navigate(-1);
  };
  return (
    <div className="py-6 min-h-screen flex flex-col justify-center">
      <h2 className="text-9xl text-center">{err.status}</h2>
      <p className="text-xl text-center my-4">
        {err.statusText ? err.statusText : "Page Not Found"}
      </p>
      <button
        onClick={handleNavigateBack}
        className="px-4 py-2 w-fit mx-auto  border-black font-bold hover:text-[#f2fffd] hover:bg-black transition-all"
      >
        Go Back
      </button>
    </div>
  );
};

export default Notfound;
