import React from "react";

export const LoadingIcon = () => {
  return (
    <div className="px-auto  flex justify-center">
      <div className="btn bg-transparent border-none">
        <span className="loading loading-spinner text-3xl"></span>
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="min-h-screen bg-white bg-opacity-25 flex flex-col justify-center py-auto px-auto">
      <LoadingIcon />
    </div>
  );
};
export default Loader;
