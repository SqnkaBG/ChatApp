import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Cat from "@/app/Images/cat-circle.png";

export default function Account() {
  return (
    <div className="flex h-screen w-screen flex-wrap bg-white">
      <Sidebar />
      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />
        <div className="b-0 flex-col h-[93%] w-[100%] bg-blue-300 flex items-center"> 
          
        </div>
      </div>
    </div>
  );
}