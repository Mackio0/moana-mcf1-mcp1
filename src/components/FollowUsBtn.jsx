import React from "react";

const FollowUsBtn = ({ icon }) => {
  return (
    <button
      type="button"
      className="text-white  aspect-square md:flex-grow-0 flex-grow bg-secondary-600   hover:bg-secondary-700 focus:ring-4 focus:outline-none  focus:ring-secondary-700 font-medium rounded-sm md:p-2.5 text-center inline-flex items-center justify-center  dark:focus:ring-secondary-600"
    >
      {icon}
    </button>
  );
};

export default FollowUsBtn;
