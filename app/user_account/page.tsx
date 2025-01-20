import Cat from "@/app/Images/cat-circle.png";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";

export default function Account() {
    return (
        <div className="flex h-screen w-screen flex-wrap bg-white">
            <Sidebar />
            <div className="h-[99%] w-full flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
                <SearchBar />
                <div className="b-0 h-f flex h-[93%] w-[100%] flex-col items-center space-y-1 overflow-y-auto bg-blue-300 pb-[1.5%]">
                    <div className="mb-[5%] mt-[5%] flex h-[13%] w-[40%] flex-row items-center justify-center lg:mb-[1%] lg:mt-0 lg:h-[18%]">
                        <Image
                            src={Cat}
                            alt="pfp"
                            height={0}
                            width={90}
                            className="lg:w-100 mt-[4%]"
                        />
                        <label
                            htmlFor="image-upload"
                            className="mb-[38%] cursor-pointer text-gray-200 hover:text-gray-400 lg:mb-[6%]"
                        >
                            <FaPencilAlt className="" />
                        </label>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            className="hidden"
                        />
                        <h1 className="ml-[2%] mt-[4%] text-center text-4xl text-black">
                            <b>User1</b>
                        </h1>
                    </div>
                    <hr className="w-[70%] lg:w-[40%]" />
                    <div className="flex h-[42%] w-[95%] flex-col items-center space-y-12 overflow-y-auto pb-[5%] pt-[5%] lg:h-full lg:w-[40%] lg:pb-[1%] lg:pt-[1%]">
                        {Array.from({ length: 48 }, (_, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]"
                                >
                                    <label className="text-lg text-black">{`Setting ${index + 1}`}</label>
                                    <input
                                        type="text"
                                        className="h-7 w-[50%] pl-[0.5%] text-lg text-black outline-double"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <hr className="mt-[20%] w-[70%] lg:w-[40%]" />
                    <div className="flex h-[8%] w-auto flex-row items-center space-x-5 pt-[5%] lg:w-[30%] lg:pt-[2%]">
                        <p className="text-lg text-black">Description</p>
                        <textarea className="border-box flex-grow resize-none text-black outline-double"></textarea>
                    </div>
                    <div className="flex h-[8%] w-auto flex-row justify-end space-x-5 space-y-8 pt-[3%] lg:w-[30%] lg:pt-0">
                        <p className="mt-[10%] text-lg text-black lg:mt-[5.5%]">
                            Status
                        </p>
                        <input
                            type="text"
                            className="h-7 flex-grow rounded-xl pl-[1%] text-lg text-black outline-double"
                            placeholder="Enter status"
                        />
                    </div>
                    <div className="ml-[4%] flex h-[10%] w-[20%] flex-row justify-center pt-[10%] lg:ml-[1%] lg:pt-[1%]">
                        <button
                            type="button"
                            className="mt-[5%] h-10 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:mt-0"
                        >
                            Save{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
