import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  // console.log("langkey=", langKey);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 ">
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceHolder}
          className="p-4 m-4 bg-white text-gray-900 col-span-9 "
        />
        <button className="px-4 py-2 m-4 bg-red-700 rounded-lg text-white col-span-3 cursor-pointer">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
