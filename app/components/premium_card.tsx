/* eslint-disable @next/next/no-img-element */
import React from "react";

export const PremiumCard = () => {
  return (
    <div className="card image-full h-[30vh]">
      <figure>
        <img
          src="/images/side_view_1.jpg"
          alt="side view image"
          loading="lazy"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-white justify-center">Go premium !</h2>
        <p className="text-gray-100 my-8">
          Add your payment method to get free full access for 14 Days.
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
