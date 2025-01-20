import Cat from "@/app/Images/cat-circle.png";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";

export default function Friends() {
    return (
        <div className="g-white flex h-screen w-screen">
            <Sidebar />

            <div className="h-[95%] w-full flex-col items-center justify-center bg-transparent md:h-[95.5%]">
                <SearchBar />
                <div className="flex h-full w-full flex-col space-y-2 overflow-y-auto bg-gray-300 pb-[22%] md:space-x-12 md:space-y-12 lg:flex-row lg:flex-wrap lg:justify-center lg:pb-[3%]">
                    <h1 className="mt-[4%] w-full text-center text-4xl text-black lg:mt-[1.3%]">
                        Friends
                    </h1>

                    {Array.from({ length: 48 }, (_, index) => {
                        return (
                            <div
                                key={index}
                                className="ml-[5%] box-border flex h-[15%] w-[90%] flex-none items-center rounded-3xl border-black active:bg-gray-200 active:bg-opacity-75 lg:mt-0 lg:h-[11%] lg:w-[20%] lg:border lg:bg-blue-200"
                            >
                                <Image
                                    src={Cat}
                                    alt="pfp"
                                    width={55}
                                    className="ml-[3%] w-[36%] md:w-[20%] lg:h-[65%] lg:w-[25%] lg:object-scale-down"
                                />
                                <p className="text-l ml-[5%] text-black md:text-3xl lg:ml-[3%] lg:text-xl">
                                    User1
                                </p>
                                <div className="flex h-full w-full items-center justify-end lg:pr-[5%]">
                                    <a
                                        className="mr-[3%] flex h-[28%] w-[18%] md:ml-[2%] md:h-[35%] md:w-[15%] lg:ml-0 lg:mr-0 lg:h-[40%] lg:w-[14%]"
                                        href="/dms"
                                    >
                                        <AiOutlineMessage
                                            className="h-full w-full fill-gray-600"
                                            title="Send message"
                                        />
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
