import React, { useContext } from "react";
import profileContext from "../context/ProfileContext";

const ProgressBar = ({ porcentage }) => {
  const { colour} = useContext(profileContext);
  
  const colorProgressBar =
  (colour === 'red') ? 'bg-red-600 h-full rounded-full transition duration-1000' :
  (colour === 'green') ? 'bg-green-500 h-full rounded-full transition duration-1000'  :
  (colour === 'yellow') ? 'bg-yellow-300 h-full rounded-full transition duration-1000'  :
  (colour === 'purple') ? 'bg-[#FF00D6] h-full rounded-full transition duration-1000'  :
  (colour === 'orange') ? 'bg-orange-500 h-full rounded-full transition duration-1000'  :
  (colour === 'blue') ? 'bg-[#00E0FF] h-full rounded-full transition duration-1000'  :
  '';

  return (
    <div className="bg-gray-300 w-full h-3  rounded-full">
      <div
        className={colorProgressBar}
        style={{ width: `${porcentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;