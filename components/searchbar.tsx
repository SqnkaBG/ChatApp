"use client";

import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
    const [storedData, setStoredData] = useState<string>("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const storedStyle = localStorage.getItem("style");
                if (storedStyle) {
                    setStoredData(storedStyle);
                } else {
                    setStoredData("1");
                }
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
        }
    }, []);
    return (
        <div
            className={`${
                storedData === "1"
                    ? "bg-teal-700"
                    : storedData === "2"
                      ? "bg-gradient-to-b from-[#0f172a] to-[#334155]"
                      : storedData === "3"
                        ? "bg-gradient-to-t from-blue-700 to-blue-500"
                        : storedData === "4"
                          ? "bg-gradient-to-t from-yellow-500 to-amber-300"
                          : ""
            } flex h-[10%] w-[100%] flex-wrap items-center justify-center md:h-[8%] md:w-[100%]`}
        >
            <div
                className={`${
                    storedData === "2" || storedData === "4"
                        ? "bg-white"
                        : "bg-slate-400"
                } flex w-[30%] rounded-md transition-all duration-300 focus-within:w-[80%] hover:w-[80%] active:w-[80%] md:w-[30%] md:focus-within:w-[30%] md:hover:w-[30%] md:active:w-[30%]`}
            >
                <input
                    className="flex w-full bg-transparent text-center text-black outline-none placeholder:text-gray-700 focus:placeholder:text-transparent"
                    type="text"
                    placeholder="Search for account, groupchat..."
                />
            </div>

            <LiaSearchSolid
                className={`${storedData === "4" ? "text-gray-800" : ""} ml-2`}
            />
        </div>
    );
};

export default SearchBar;
