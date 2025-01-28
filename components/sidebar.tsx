"use client";

import React, { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuHome } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
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
                    ? "bg-[#00cc77]"
                    : storedData === "2"
                      ? "bg-gradient-to-br from-gray-800 to-gray-200"
                      : storedData === "3"
                        ? "bg-cyan-500"
                        : storedData === "4"
                          ? "bg-amber-400"
                          : ""
            } fixed bottom-0 flex h-[10%] w-full flex-row items-center justify-center sm:w-[4.5%] md:static md:h-full md:w-[4.5%] md:flex-col`}
        >
            <div className="flex h-[80%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/"
                >
                    <LuHome
                        className={`${
                            storedData === "4" ? "text-gray-800" : ""
                        } h-[80%] w-[80%]`}
                    />
                </a>
            </div>

            <div className="flex h-[100%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/friends"
                >
                    <LiaUserFriendsSolid
                        className={`${
                            storedData === "4" ? "text-gray-800" : ""
                        } h-[80%] w-[80%]`}
                    />
                </a>
            </div>

            <div className="flex h-[70%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/dms"
                >
                    <FaRegMessage
                        className={`${
                            storedData === "4" ? "text-gray-800" : ""
                        } h-[80%] w-[80%]`}
                    />
                </a>
            </div>

            <div className="flex h-[80%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/user_account"
                >
                    <VscAccount
                        className={`${
                            storedData === "4" ? "text-gray-800" : ""
                        } h-[80%] w-[80%]`}
                    />
                </a>
            </div>

            <div className="flex h-[80%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/settings"
                >
                    <IoSettingsOutline
                        className={`${
                            storedData === "4" ? "text-gray-800" : ""
                        } h-[80%] w-[80%]`}
                    />
                </a>
            </div>
        </div>
    );
};
export default Sidebar;
