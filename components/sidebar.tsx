"use client";

import React, { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuHome } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
    const [storedData, setStoredData] = useState<string>("");
    const [bg, setBg] = useState<string>("");

    const setColors = () => {
        if (storedData === "2") {
            setBg("bg-gradient-to-br from-gray-800 to-gray-200");
        } else if (storedData === "3") {
            setBg("bg-cyan-500");
        } else if (storedData === "4") {
            setBg("bg-orange-500");
        } else setBg("bg-[#00cc77]");
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
            } fixed bottom-0 flex h-[10%] w-full flex-row items-center justify-center sm:w-[4.5%] md:static md:h-full md:w-[4.5%] md:flex-col`}
        >
            <div className="flex h-4/5 w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex size-full items-center justify-center"
                    href="/"
                >
                    <LuHome className="size-4/5" />
                </a>
            </div>

            <div className="flex size-full items-center justify-center md:h-[10%]">
                <a
                    className="flex size-full items-center justify-center"
                    href="/friends"
                >
                    <LiaUserFriendsSolid className="size-4/5" />
                </a>
            </div>

            <div className="flex h-[70%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex size-full items-center justify-center"
                    href="/dms"
                >
                    <FaRegMessage className="size-4/5" />
                </a>
            </div>

            <div className="flex h-4/5 w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex size-full items-center justify-center"
                    href="/user_account"
                >
                    <VscAccount className="size-4/5" />
                </a>
            </div>

            <div className="flex h-4/5 w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex size-full items-center justify-center"
                    href="/settings"
                >
                    <IoSettingsOutline className="size-4/5" />
                </a>
            </div>
        </div>
    );
};
export default Sidebar;
