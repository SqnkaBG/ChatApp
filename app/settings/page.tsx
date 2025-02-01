"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";

export default function Settings() {
    const [style, setStyle] = useState("1");
    const [storedData, setStoredData] = useState<string>("1");
    const [selectValue, setSelectValue] = useState<string>(storedData); //this is the value of the select elem.

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const storedStyle = localStorage.getItem("style");
                if (storedStyle) {
                    setStoredData(storedStyle);
                    setSelectValue(storedStyle);
                } else {
                    setStoredData("1");
                    setSelectValue("1");
                }
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
        }
    }, []);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const dataHasChanged = style !== storedData;

        if (dataHasChanged) {
            if (typeof window !== "undefined") {
                try {
                    // Save data to localStorage
                    if (style) localStorage.setItem("style", style);
                    setStoredData(style);
                    alert("Data saved successfully!");
                    window.location.reload();
                } catch (error) {
                    console.error("Error saving to localStorage:", error);
                    alert("An error occurred while saving data.");
                }
            } else {
                alert("No changes detected, data not saved.");
            }
        }
    };
    return (
        <div className="flex h-screen w-screen flex-wrap bg-white">
            <Sidebar />
            <div
                className={`${
                    storedData === "1"
                        ? "bg-gradient-to-r from-blue-400 to-blue-600"
                        : storedData === "2"
                          ? "bg-gradient-to-br from-[#374151] via-[#f43f5e] to-red-300"
                          : storedData === "3"
                            ? "bg-gradient-to-tr from-purple-100 via-purple-500 to-purple-800"
                            : storedData === "4"
                              ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d97706] via-[#d97706] to-[#c2410c]"
                              : ""
                } h-full w-full flex-col items-center justify-center overflow-y-auto md:w-[95.5%]`}
            >
                <SearchBar />
                <div className="flex h-[93%] w-full flex-col pb-[1%] text-black">
                    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500">
                        <h1
                            className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} mt-[2%] flex items-center justify-center text-4xl font-extrabold drop-shadow-lg`}
                        >
                            Change style
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-3 flex flex-row justify-center">
                                <select
                                    value={selectValue}
                                    onChange={(e) => {
                                        setStyle(e.target.value);
                                        setSelectValue(e.target.value);
                                    }}
                                    className="mt-[1%] rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="1">Blue/Green</option>
                                    <option value="2">Red/Black</option>
                                    <option value="3">Purple/Blue</option>
                                    <option value="4">Orange/Yellow</option>
                                </select>
                            </div>
                            <hr className="my-6 border-gray-400" />

                            <h1
                                className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} drop-shadow-lg" flex items-center justify-center text-4xl font-extrabold`}
                            >
                                DMS settings
                            </h1>
                            <h2
                                className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} " mt-[1%] flex items-center justify-center text-xl font-medium`}
                            >
                                Upload config from file
                            </h2>

                            <div className="ml-[8%] flex flex-row items-center justify-center">
                                <input
                                    type="file"
                                    accept=".js"
                                    className="mt-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <h2
                                className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} font-medium" mt-[1%] flex items-center justify-center text-xl md:mb-[1%]`}
                            >
                                Make a config
                            </h2>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Time Format"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>12-hour</option>
                                        <option>24-hour</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2 md:pl-[4%]">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Font"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Serif</option>
                                        <option>Sans-serif</option>
                                        <option>Arial</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2 md:pl-[4%]">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Font size"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Display Avatars"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Animations"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Enable notifications"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Message Bubbles"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Rounded</option>
                                        <option>Square</option>
                                        <option>None</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Message Bubble Color"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>some colors</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label
                                        className={`${storedData === "4" || storedData === "2" ? "text-black" : "text-white"} text-lg`}
                                    >
                                        {"Enable custom chat background"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className={`${
                                        storedData === "1"
                                            ? "border-green-800 bg-green-700 text-white"
                                            : storedData === "2"
                                              ? "border-red-900 bg-red-800 text-black"
                                              : storedData === "3"
                                                ? "border-blue-800 bg-blue-700 text-white"
                                                : storedData === "4"
                                                  ? "border-peach bg-light-peach text-black"
                                                  : ""
                                    } m-[-8%] h-10 cursor-pointer rounded-lg border-b-[4px] px-6 py-2 transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 focus:outline-none active:translate-y-[2px] active:border-b-[2px] active:brightness-90 lg:mt-0 lg:w-[6%]`}
                                >
                                    Submit{" "}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
