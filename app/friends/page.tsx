import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Cat from "@/app/Images/cat-circle.png";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlinePersonRemove } from "react-icons/md";
import { ImBlocked } from "react-icons/im";

export default function Friends() {
  return (
    <div className="g-white flex h-screen w-screen">
      <Sidebar />

      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />
        <div className="relative flex h-[93%] w-full flex-wrap content-start justify-center space-x-12 space-y-12 bg-gray-300 overflow-y-auto pb-[5%]">
          <h1 className="mt-[1.5%] text-center w-full text-4xl text-black">
            Friends
          </h1>
          <input
            className="absolute top-14 w-full max-w-md bg-gray-200 text-black text-center placeholder:text-center placeholder:text-black italic outline-none focus:placeholder:text-gray-200"
            type="text"
            placeholder="Search friends by name"
          ></input>
          {Array.from({ length: 40 }, (_, index) => {
            return (
              <div
                key={index}
                className="relative top-16 flex box-border h-[11%] w-[20%] border border-black bg-blue-200 items-center"
              ><Image
                    src={Cat}
                    alt="pfp"
                    width={55}
                    className="object-scale-down ml-[3%]"
                  />
                  <p className="text-black ml-[3%] text-xl">User1</p>
                  <div className="flex items-center h-full w-full justify-end pr-[5%]">
                    <MdOutlinePersonRemove  className="h-[37%] w-[16%] fill-gray-600 ml-[20%]"
                      title="Remove from Friends List"/>
                    <ImBlocked className="h-[28%] w-[27%] fill-gray-600"
                      title="Block User"/>
                    <a
                        className="flex h-[50%] w-[16%]"
                          href="/dms">
                              
                        <AiOutlineMessage className="h-full w-full fill-gray-600"
                          title="Send message"/>
                    </a>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
