import React from "react";

const SeachHistory = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-2">
      <h2 className="font-semibold">No recent searches yet</h2>
      <p className="secondary-text text-xs text-center">
        After you run a search, your recent <br /> searches will live here.
      </p>
      <button
        type="button"
        className="border px-6 py-2.5 rounded-md text-sm primary-text font-semibold hover:border-[#003a9b] hover:bg-[#003a9b]/10"
      >
        Start Search
      </button>
    </section>
  );
};

export default SeachHistory;
