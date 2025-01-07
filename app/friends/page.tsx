import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Cat from "@/app/Images/cat-circle.png";

export default function Friends() {
  return (
    <div className="flex h-screen w-screen g-white">
      <Sidebar />
    
      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />
        <div className="relative flex h-[93%] w-[100%] bg-gray-300 space-x-12 space-y-12 justify-center flex-wrap content-start">
          <h1 className="w-full text-center mt-[1%] text-3xl text-black">Friends</h1>
          <div className="flex h-[11%] w-[30%] bg-gray-200 box-border border border-black">
           
          </div>
          <div className="flex h-[11%] w-[30%] bg-gray-200 box-border border border-black">

          </div>
          <div className="flex h-[11%] w-[30%] bg-gray-200 box-border border border-black">

          </div>
          <div className="flex h-[11%] w-[30%] bg-gray-200 box-border border border-black">

          </div>
          <div className="flex h-[11%] w-[30%] bg-gray-200 box-border border border-black">

          </div>
          <div className="flex h-[11%] w-[30%] bg-gray-200 box-border border border-black">

          </div>
          
        </div>
      </div>
    </div>
  );
}
