import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Cat from "@/app/Images/cat-circle.png";
import { AiOutlineMessage } from "react-icons/ai";

export default function Friends() {
  return (
    <div className="g-white flex h-screen w-screen">
      <Sidebar/>

      <div className="h-[90%] lg:h-[92.5%] w-full flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar/>
        <div className="flex flex-col lg:flex-row h-full w-full lg:flex-wrap lg:justify-center md:space-x-12 space-y-2 md:space-y-12 bg-gray-300 overflow-y-auto pb-[22%] lg:pb-[3%]">
          <h1 className="lg:mt-[1.3%] mt-[4%] text-center w-full text-4xl text-black">Friends</h1>
          
          {Array.from({ length: 48 }, (_, index) => {
            return (
              <div
                key={index}
                className="ml-[5%] lg:mt-0 flex flex-none box-border h-[15%] w-[90%] lg:h-[11%] lg:w-[20%] lg:border border-black lg:bg-blue-200 active:bg-gray-200 active:bg-opacity-75 rounded-3xl items-center">
                  <Image
                    src={Cat}
                    alt="pfp"
                    width={55}
                    className="lg:object-scale-down md:w-[20%] lg:h-[65%] w-[36%] lg:w-[25%] ml-[3%]"/>
                  <p className="text-black ml-[5%] lg:ml-[3%] text-l md:text-3xl lg:text-xl">User1</p>
                  <div className="flex items-center h-full w-full justify-end lg:pr-[5%]">
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
