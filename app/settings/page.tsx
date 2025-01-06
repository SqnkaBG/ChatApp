import SearchBar from "@/components/searchbar";
import ShowBox from "@/components/showbox";
import Sidebar from "@/components/sidebar";
import Cat from "@/app/Images/cat-circle.png";
import Image from "next/image";

export default function Settings() {
  return (
    <div className="flex h-screen w-screen flex-wrap bg-white">
      <Sidebar />

      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />

        <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent flex h-[93%] w-[100%] flex-col overflow-y-auto bg-blue-300 text-black shadow-md">
          {Array.from({ length: 120 }, (_, index) => (
            <div key={index} className="ml-3 flex flex-col">
              <h1>Mode</h1>
              <input type="radio" placeholder="select this" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
