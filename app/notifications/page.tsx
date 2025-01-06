import SearchBar from "@/components/searchbar";
import ShowBox from "@/components/showbox";
import Sidebar from "@/components/sidebar";

export default function Notifications() {
  return (
    <div className="flex h-screen w-screen flex-wrap bg-white">
      <Sidebar />

      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />
        <div className="b-0 flex-col h-[93%] w-[100%] bg-gray-500 flex items-center">
          <div className="box-content h-[20%] w-[97%] border-2 border-black bg-gray-400 mt-[1%]">
          </div>
          <div className="box-content h-[20%] w-[97%] border-2 border-black bg-gray-400 mt-[1%]">
          </div>
          <div className="box-content h-[20%] w-[97%] border-2 border-black bg-gray-400 mt-[1%]">
          </div>
          <div className="box-content h-[20%] w-[97%] border-2 border-black bg-gray-400 mt-[1%]">
          </div>
          <div className="box-content h-[20%] w-[97%] border-2 border-black bg-gray-400 mt-[1%]">
          </div>
        </div>
      </div>
    </div>
  );
}
