import React from "react";
import { MdOutlineLink } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const JobDetails = () => {
  return (
    <div className="w-full relative h-full">
      <div className="w-full p-4 2xl:p-6 h-[25%] shadow-md bg-white rounded-t-lg">
        <h2 className="font-semibold text-xl">React.js / Next.js Developer</h2>
        <p className="secondary-text text-sm my-2">
          Poverty Eradiction Initiative - Karachi
        </p>
        <div className="w-full flex items-center gap-2 mt-2">
          <button type="button" className="primary-btn px-4">
            Apply now
          </button>
          <button
            type="button"
            className="w-10 h-10 bg-gray-300 rounded-lg hover:bg-gray-400/60"
          ></button>
          <button
            type="button"
            className="w-10 h-10 bg-gray-300 rounded-lg hover:bg-gray-400/60"
          ></button>
          <button
            type="button"
            className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-400/60"
          >
            <MdOutlineLink className="text-lg " />
          </button>
        </div>
      </div>
      <div className="w-full h-[70%] overflow-y-scroll">
        <div className="w-full border-b p-4 2xl:p-6">
          <h4 className="font-medium">Job details</h4>
          <p className="text-xs secondary-text font-light mt-1">
            Here’s how the job details align with your{" "}
            <Link to={`/profile`}>Profile</Link>
          </p>
        </div>
        <div className="w-full border-b p-4 2xl:p-6">
          <h4 className="font-medium">Location</h4>
          <div className="mt-1 flex items-center gap-2">
            <IoLocationSharp className="secondary-text" />
            <p className="text-sm secondary-text font-light">Karachi</p>
          </div>
        </div>

        <div className="w-full p-4 2xl:p-6 flex flex-col items-start gap-4">
          <h4 className="font-bold">Full job description</h4>
          <p className=" text-sm">
            Fulcrum Pvt Ltd is looking for a " Frontend React.js Developer -
            Consultant " for it's leading client.
          </p>
          <div className="w-full">
            <p className=" text-sm">
              <span className="font-bold">Job Title:</span> Frontend React.js
              Developer - Consultant
            </p>
            <p className=" text-sm">
              <span className="font-bold">Job Type:</span> Remote
            </p>
          </div>
          <div className="w-full">
            <p className="font-bold text-sm">Job Description</p>
            <p className="text-sm">
              We are seeking an experienced{" "}
              <span className="font-bold">Frontend React.js Developer</span> to
              join our dynamic team. The ideal candidate will have a strong
              background in building scalable and responsive web applications
              using React.js. This is a remote position, and candidates must
              have their own laptop to work efficiently.
            </p>
          </div>
          <p className=""></p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
