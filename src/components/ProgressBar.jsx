import React, { useContext } from "react";
import profileContext from "../context/ProfileContext";

const ProgressBar = ({ porcentage }) => {
  const { lightMode} = useContext(profileContext);
  return (
    <div className="bg-gray-300 w-full h-5 rounded-full">
      <div
        className={lightMode ? "bg-[#002259] h-full rounded-full":"bg-[#706DFF] h-full rounded-full" }
        style={{ width: `${porcentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;