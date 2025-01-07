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
        <div className="flex h-[93%] w-[100%] flex-col overflow-y-auto bg-blue-300 text-black">
          <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
            <h1 className="mt-[2%] flex items-center justify-center text-3xl">
              Change style
            </h1>
            <div className="flex flex-row justify-center">
              <select className="mt-[1%] rounded-xl">
                <option>da</option>
                <option>ne</option>
              </select>
            </div>
            <hr className="m-[2%]" />
            <h1 className="flex items-center justify-center text-3xl">
              DMS settings
            </h1>
            <h2 className="mt-[1%] flex items-center justify-center text-xl">
              Upload config from file
            </h2>
            <div className="ml-[8%] flex flex-row items-center justify-center">
              <input type="file" />
            </div>
            <h2 className="mt-[1%] flex items-center justify-center text-xl">
              Make a config
            </h2>
            <form className="flex flex-col items-center justify-center">
              {Array.from({ length: 23 }, (_, index) => {
                return (
                  <div
                    key={index}
                    className="m-[0.5%] flex w-[100%] flex-row justify-center"
                  >
                    <label className="mr-[1%] justify-start">
                      Setting {index + 1}
                    </label>
                    <select>
                      <option>da</option>
                      <option>ne</option>
                    </select>
                  </div>
                );
              })}
              <button
                type="submit"
                className="m-[2%] rounded-xl bg-green-500 px-[2%]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
