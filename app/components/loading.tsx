import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen bg-white bg-opacity-25">
      <div className="px-8 grid justify-center content-center">
        <p className="text-center py-10 text-xl font-mono antialiased italic gap-3">
        <span className="loading loading-ring loading-lg"></span>
        </p>
      </div>
    </div>
  );
};
export default Loader;
