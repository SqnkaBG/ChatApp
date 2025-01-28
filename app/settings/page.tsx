"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";

export default function Settings() {
    const [style, setStyle] = useState("1");
    const [storedData, setStoredData] = useState<string>("1");
    const [selectedValue, setSelectedValue] = useState<string>(storedData);

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const storedStyle = localStorage.getItem("style");
                if (storedStyle) {
                    setStoredData(storedStyle);
                    setSelectedValue(storedStyle);
                } else {
                    setStoredData("1");
                    setSelectedValue("1");
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
                          ? "bg-gradient-to-br from-[#374151] via-[#f43f5e] to-[#fb923c]"
                          : storedData === "3"
                            ? "bg-gradient-to-tr from-purple-100 via-purple-500 to-purple-800"
                            : storedData === "4"
                              ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#f59e0b] via-[#f59e0b] to-[#ea580c]"
                              : ""
                } h-full w-full flex-col items-center justify-center overflow-y-auto md:w-[95.5%]`}
            >
                <SearchBar />
                <div className="flex h-[93%] w-full flex-col pb-[1%] text-black">
                    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500">
                        <h1 className="mt-[2%] flex items-center justify-center text-4xl font-extrabold text-white drop-shadow-lg">
                            Change style
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-3 flex flex-row justify-center">
                                <select
                                    value={selectedValue}
                                    onChange={(e) => {
                                        setStyle(e.target.value);
                                        setSelectedValue(e.target.value);
                                    }}
                                    className="mt-[1%] rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="1">Blue</option>
                                    <option value="2">Red</option>
                                    <option value="3">Purple</option>
                                    <option value="4">Yellow</option>
                                </select>
                            </div>
                            <hr className="my-6 border-gray-400" />

                            <h1 className="flex items-center justify-center text-4xl font-extrabold text-white drop-shadow-lg">
                                DMS settings
                            </h1>
                            <h2 className="mt-[1%] flex items-center justify-center text-xl font-medium text-white">
                                Upload config from file
                            </h2>

                            <div className="ml-[8%] flex flex-row items-center justify-center">
                                <input
                                    type="file"
                                    className="mt-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <h2 className="mt-[1%] flex items-center justify-center text-xl font-medium text-white">
                                Make a config
                            </h2>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                {Array.from({ length: 23 }, (_, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex w-full flex-row items-center justify-center space-x-2"
                                        >
                                            <label className="text-lg text-white">{`Setting ${index + 1}`}</label>
                                            <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>da</option>
                                                <option>ne</option>
                                            </select>
                                        </div>
                                    );
                                })}
                                <button
                                    type="submit"
                                    className="mt-6 rounded-xl bg-green-500 px-6 py-3 text-xl font-semibold text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
