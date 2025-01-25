"use client";

import Cat from "@/app/Images/cat-circle.png";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function Account() {
    const [imageSrc, setImageSrc] = useState<string>(Cat.src); // Initial image source

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            // Create an object URL for the selected file
            setImageSrc(URL.createObjectURL(file));
        }
    }
    return (
        <div className="flex h-screen w-screen flex-wrap bg-white">
            <Sidebar />
            <div className="h-[99%] w-full flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
                <SearchBar />
                <div className="b-0 h-f flex h-[93%] w-[100%] flex-col items-center space-y-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-600 via-blue-200 to-cyan-600 pb-[1.5%]">
                    <div className="mb-[5%] mt-[5%] flex h-[13%] w-[40%] flex-row items-center justify-center lg:mb-[1%] lg:mt-0 lg:h-[18%]">
                        <Image
                            src={imageSrc}
                            alt="pfp"
                            height={0}
                            width={90}
                            className="lg:w-100 drop-shadow-solid mt-[4%]"
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
                            onChange={handleChange}
                            className="hidden"
                        />
                        <h1 className="ml-[2%] mt-[4%] text-center text-4xl font-bold text-black">
                            User1
                        </h1>
                    </div>
                    <hr className="w-[70%] border-[#127d46] lg:w-[40%]" />
                    <div className="flex h-[55%] w-[95%] flex-col items-center space-y-12 overflow-y-auto pb-[5%] pt-[5%] lg:h-[70%] lg:h-full lg:w-[50%] lg:pb-[1%] lg:pt-[2%]">
                        <div className="flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]">
                            <label className="text-lg text-black">
                                Username
                            </label>
                            <input
                                type="text"
                                className="shadow-custom h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black outline-none"
                            />
                        </div>
                        <div className="flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]">
                            <label className="text-lg text-black">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="shadow-custom h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black outline-none"
                            />
                        </div>
                        <div className="flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]">
                            <label className="text-lg text-black">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="shadow-custom h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black outline-none"
                            />
                        </div>
                        <div className="mr-[4%] flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]">
                            <label className="text-lg text-black">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 45 678 1234"
                                pattern="[0-9]{1,3}-[0-9]{2}-[0-9]{3}-[0-9]{4}"
                                className="shadow-custom h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black outline-none"
                            />
                        </div>
                    </div>
                    <hr className="w-[70%] border-[#127d46] lg:w-[40%]" />
                    <div className="ml-[4%] flex h-[10%] w-[20%] flex-row justify-center pt-[5%] lg:ml-[1%] lg:pt-[1%]">
                        <button
                            type="button"
                            className="mt-[5%] h-10 w-[30%] cursor-pointer rounded-lg border-b-[4px] border-cyan-800 bg-cyan-700 px-6 py-2 text-white transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 focus:outline-none active:translate-y-[2px] active:border-b-[2px] active:brightness-90 lg:mt-0"
                        >
                            Save{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
