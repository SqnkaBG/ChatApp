"use client";

import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
    const [storedData, setStoredData] = useState<string>("");
    const [bg, setBg] = useState<string>("");
    const [searchBox, setSearchBox] = useState<string>("");

    const setColors = () => {
        if (storedData === "2") {
            setBg("bg-gradient-to-b from-[#0f172a] to-[#334155]");
            setSearchBox("bg-white");
        } else if (storedData === "3") {
            setBg("bg-gradient-to-t from-blue-700 to-blue-500");
            setSearchBox("bg-slate-400");
        } else if (storedData === "4") {
            setBg("bg-gradient-to-t from-orange-800  to-orange-700");
            setSearchBox("bg-white");
        } else {
            setBg("bg-gradient-to-t from-teal-700  to-teal-800");
            setSearchBox("bg-slate-400");
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                setColors();
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
    }, [storedData, setStoredData]);
    return (
        <div
            className={`${
                bg
            } sticky top-0 z-10 flex h-[10%] w-full flex-wrap items-center justify-center md:h-[8%] md:w-full`}
        >
            <div
                className={`${
                    searchBox
                } flex w-[30%] rounded-md transition-all duration-300 focus-within:w-4/5 hover:w-4/5 active:w-4/5 md:w-[30%] md:focus-within:w-[30%] md:hover:w-[30%] md:active:w-[30%]`}
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
