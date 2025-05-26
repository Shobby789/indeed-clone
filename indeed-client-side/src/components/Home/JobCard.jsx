import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const JobCard = () => {
  return (
    <div className="border border-gray-300 mb-3 p-4 2xl:p-6 rounded-lg relative group hover:shadow-md transition-all duration-200 hover:cursor-pointer">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-semibold group-hover:underline transition-all duration-200">
          Front-End Developer (Remote)
        </h3>
        <button type="button">
          <BsThreeDotsVertical />
        </button>
      </div>
      <p className="text-sm text-gray-700 mt-2">Pearson Lacke Solicitors</p>
      <p className="text-sm text-gray-700">Karachi</p>
      <p className="text-sm text-green-900 bg-[#e4f7e6] py-1 px-2 font-semibold rounded-md my-2.5 inline-flex items-center gap-2">
        Up to Rs 100,000 a month <FaHeart />
      </p>
      <p className="text-gray-700 text-xs">Active 3 days ago</p>
    </div>
  );
};

export default JobCard;
