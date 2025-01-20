import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Cat from "@/app/Images/cat-circle.png";
import { FaPencilAlt } from "react-icons/fa";

export default function Account() {
  return (
    <div className="flex h-screen w-screen flex-wrap bg-white">
      <Sidebar />
      <div className="h-[99%] w-full flex-col items-center justify-center bg-teal-700 sm:w-[95.5%] ">
        <SearchBar />
        <div className="b-0 flex-col h-f h-[93%] w-[100%] bg-blue-300 flex items-center space-y-1 pb-[1.5%] overflow-y-auto"> 
          <div className="flex flex-row h-[13%] lg:h-[18%] w-[40%] items-center justify-center mb-[5%] lg:mb-[1%] lg:mt-0 mt-[5%] ">
            <Image  
              src={Cat}
              alt="pfp"
              height={0}
              width={90}
              className="mt-[4%] lg:w-100"/>
            <label htmlFor="image-upload" className="cursor-pointer text-gray-200 hover:text-gray-400 mb-[38%] lg:mb-[6%]">
                <FaPencilAlt className=""/>
            </label>
            <input type="file" id="image-upload" accept="image/*" className="hidden"/>
            <h1 className="text-center text-4xl text-black mt-[4%] ml-[2%]"><b>User1</b></h1>
          </div>
          <hr className="w-[70%] lg:w-[40%]"/>
          <div className="h-[42%] lg:h-full w-[95%] lg:w-[40%] flex flex-col space-y-12 items-center overflow-y-auto pt-[5%] lg:pt-[1%] pb-[5%] lg:pb-[1%]">
            {Array.from({ length: 48 }, (_, index) => {
            return (
              <div
                key={index}
                className="flex flex-row h-auto w-auto lg:w-[90%] space-x-5 items-center justify-center">
                  <label className="text-lg text-black">{`Setting ${index + 1}`}</label>
                  <input
                  type="text"
                  className="h-7 w-[50%] text-black text-lg outline-double pl-[0.5%]"/>
              </div>
              );
            })}
          </div>
          <hr className="w-[70%] lg:w-[40%] mt-[20%]"/>
          <div className="flex flex-row h-[8%] w-auto lg:w-[30%] space-x-5 items-center pt-[5%] lg:pt-[2%]">
            <p className="text-lg text-black">Description</p>
            <textarea className="border-box resize-none text-black flex-grow outline-double" ></textarea>
          </div>
          <div className="flex flex-row h-[8%] w-auto lg:w-[30%] space-x-5 space-y-8 justify-end pt-[3%] lg:pt-0">
            <p className="text-lg text-black mt-[10%] lg:mt-[5.5%]">Status</p>
            <input
                type="text"
                className="h-7 text-black text-lg outline-double rounded-xl pl-[1%] flex-grow" 
                placeholder="Enter status"/>
          </div>
            <div className="flex flex-row w-[20%] h-[10%] justify-center ml-[4%] lg:ml-[1%] pt-[10%] lg:pt-[1%]">
              <button
                type="button"
                className="mt-[5%] lg:mt-0 h-10 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                >Save </button>
            </div>
        </div>
      </div>
    </div>
  );
}