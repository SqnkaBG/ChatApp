import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Cat from "@/app/Images/cat-circle.png";

export default function Friends() {
  return (
    <div className="g-white flex h-screen w-screen">
      <Sidebar />

      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />
        <div className="relative flex h-[93%] w-[100%] flex-wrap content-start justify-center space-x-12 space-y-12 bg-gray-300">
          <h1 className="mt-[1%] w-full text-center text-4xl text-black">
            Friends
          </h1>
          {Array.from({ length: 12 }, (_, index) => {
            return (
              <div
                key={index}
                className="box-border flex h-[11%] w-[20%] border border-black bg-gray-200"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
