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
      <Sidebar/>

      <div className="h-full w-full flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />
        <div className="relative flex flex-col lg:flex-row h-[93%] w-full lg:flex-wrap content-start lg:justify-center md:space-x-12 space-y-2 md:space-y-12 bg-gray-300 overflow-y-auto pb-[20%] lg:pb-[5%]">
          <h1 className="lg:mt-[1.3%] mt-[4%] text-center w-full text-4xl text-black">Friends</h1>
          <button
                type="button"
                className="hidden lg:block absolute top-10 lg:right-[32%] h-10 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >Search</button>
          <input
            className="absolute top-[11%] md:top-[6.5%] lg:top-12 left-[15%] md:left-[16.5%] lg:left-[35%] w-[70%] lg:w-full max-w-md bg-gray-200 text-black text-center placeholder:text-center placeholder:text-black italic outline-none focus:placeholder:text-gray-200"
            type="text"
            placeholder="Search friends by name"
          ></input>
          
          {Array.from({ length: 48 }, (_, index) => {
            return (
              <div
                key={index}
                className="relative top-16 left-[7%] md:left-0 flex flex-none box-border h-[15%] w-[87%] lg:h-[11%] lg:w-[20%] lg:border border-black lg:bg-blue-200 active:bg-gray-200 active:bg-opacity-75 rounded-3xl items-center"
              ><Image
                    src={Cat}
                    alt="pfp"
                    width={55}
                    className="lg:object-scale-down md:w-[20%] lg:h-[65%] w-[36%] lg:w-[25%] ml-[3%]"
                  />
                  <p className="text-black ml-[5%] lg:ml-[3%] text-l md:text-3xl lg:text-xl">User1</p>
                  <div className="flex items-center h-full w-full justify-end lg:pr-[5%]">
                    <MdOutlinePersonRemove  className="h-[38%] w-[18%] lg:w-[14%] fill-gray-600"
                      title="Remove from Friends List"/>
                    <ImBlocked className="h-[23%] md:h-[30%] w-[23%] md:w-[18%] fill-gray-600 lg:mr-[0.9%]"
                      title="Block User"/>
                    <a
                        className="flex h-[28%] w-[18%] md:w-[15%] md:h-[35%] lg:h-[40%] lg:w-[14%] md:ml-[2%] mr-[3%] lg:mr-0 lg:ml-0"
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
