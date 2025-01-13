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
        <div className="b-0 flex-col h-[93%] w-[100%] bg-blue-300 flex items-center justify-start space-y-1"> 
          <div className="flex flex-row h-[18%] w-[40%] space-x-6 items-center justify-center">
            <Image
              src={Cat}
              alt="pfp"
              width={100}
              className="mt-[4%]"
            />
            <h1 className="text-center text-4xl text-black mt-[4%]"><b>User1</b></h1>
          </div>
          <hr className="w-[40%] color-black"/>
          <div className="flex flex-row h-[8%] w-[30%] space-x-5 items-center">
            <p className="text-lg text-black">Username</p>
            <input
                type="text"
                className="h-7 flex-grow text-black text-lg outline-double" 
                value=" User1"
              />
          </div>
          <div className="flex flex-row h-[8%] w-[30%] space-x-5 items-center">
            <p className="text-lg text-black">Phone Number</p>
            <input
                type="text"
                className="h-7 flex-grow text-black text-lg outline-double" 
                value=" 088-111-1111"
              />
          </div>
          <div className="flex flex-row h-[8%] w-[30%] space-x-5 items-center">
            <p className="text-lg text-black">New password</p>
            <input
                type="password"
                className="h-7 flex-grow text-black text-lg outline-double" 
              />
          </div>
          <hr className="w-[40%] color-black"/>
          <div className="flex flex-row h-[8%] w-[30%] space-x-5 items-center pt-[2%]">
            <p className="text-lg text-black">Description</p>
            <textarea className="border-box resize-none text-black flex-grow outline-double" ></textarea>
          </div>
          <div className="flex flex-row h-[8%] w-[30%] space-x-5 space-y-8 items-center">
            <p className="text-lg text-black mt-[5.5%]">Status</p>
            <input
                type="text"
                className="h-7 text-black text-lg outline-double flex-grow rounded-xl pl-[1%]" 
                placeholder="Enter status"
              />
          </div>
            <div className="flex flex-row w-[20%] h-[10%] justify-center space-x-4 ml-[1%]">
              <button
                type="button"
                className="mt-[5%] h-10 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >Save changes</button> 
              <button
                type="button"
                className="mt-[5%] h-10 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >Log out</button>
            </div>
        </div>
      </div>
    </div>
  );
}