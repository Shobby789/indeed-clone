import React, { useState } from "react";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import SearchHistory from "./SeachHistory";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="w-full pt-6">
      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => toggleTab("jobs")}
          className={`w-60 text-base text-gray-700 py-2 ${
            activeTab === "jobs" &&
            "font-bold border-b-[3px] border-[#003a9b] border-opacity-70"
          }`}
        >
          Job for you
        </button>
        <button
          type="button"
          onClick={() => toggleTab("search-history")}
          className={`w-60 text-base text-gray-700 py-2 ${
            activeTab === "search-history" &&
            "font-bold border-b-[3px] border-[#003a9b] border-opacity-70"
          }`}
        >
          Recent searches
        </button>
      </div>
      <div className="w-full border-t border-gray-300 padding-x">
        {activeTab === "jobs" ? (
          <div className="w-full h-screen pt-7 grid grid-cols-2 relative lg:w-[75%] 2xl:w-[70%] mx-auto overflow-y-hidden">
            <div className="jobListing h-full px-4 overflow-y-auto">
              <p className="text-gray-700 text-xs mb-4">
                Jobs based on your activity on Indeed
              </p>
              <JobList />
            </div>
            <div className="min-h-[90%] max-h-[95%] border border-gray-300 rounded-lg">
              <JobDetails />
            </div>
          </div>
        ) : (
          <div className="w-full pt-7 relative lg:w-[75%] 2xl:w-[70%] mx-auto min-h-[70vh]">
            <SearchHistory />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tabs;
