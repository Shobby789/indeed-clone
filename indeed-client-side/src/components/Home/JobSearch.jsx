import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const JobSearch = () => {
  return (
    <section className="w-full flex items-center justify-center py-6 padding-x">
      <div className="border border-gray-400 rounded-lg shadow-lg h-14 w-[60%] 2xl:w-[45%] pr-2 pl-4 flex items-center justify-between gap-5">
        <div className="flex items-center gap-3 h-full w-full">
          <IoSearch className="text-xl" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="text-sm w-full outline-none"
          />
        </div>
        <div className="">
          <div className="h-7 border border-gray-300" />
        </div>
        <div className="flex items-center gap-3 h-full w-full">
          <MdLocationOn className="text-2xl" />
          <input
            type="text"
            placeholder={`City, state, zip code, or "remote"`}
            className="text-sm w-full outlne-none"
          />
        </div>
        <button type="button" className="primary-btn lg:w-48 ">
          Find jobs
        </button>
      </div>
    </section>
  );
};

export default JobSearch;
