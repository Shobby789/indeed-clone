import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="w-full padding-x border-b py-5 border-gray-200">
      <nav className="w-full flex items-center justify-between">
        <ul className="flex items-center justify-start gap-x-7">
          <li>
            <Link to={`/`}>
              <strong className="primary-text text-xl tracking-tighter">
                indeed
              </strong>
            </Link>
          </li>
          <li>
            <Link to={`/`} className="text-[13px] text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/`} className="text-[13px] text-gray-700">
              Company Reviews
            </Link>
          </li>
        </ul>

        <ul className="flex items-center justify-start gap-x-7">
          <li>
            <Link to={`/`}>
              <BiSolidMessageDetail className="text-xl mt-0.5" />
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <IoMdNotifications className="text-xl mt-0.5" />
            </Link>
          </li>
          <li>
            <Link to={`/`} className="text-[13px] text-gray-700">
              <FaUser className="text-base" />
            </Link>
          </li>
          <li>
            <div className="border h-5 border-gray-200" />
          </li>
          <li>
            <Link to={`/`} className="text-[13px] text-gray-700">
              Employers / Post Job
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
