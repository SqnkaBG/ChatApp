"use client";

import Button from "@/components/button";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";

export default function Settings() {
    const [style, setStyle] = useState("1");
    const [storedData, setStoredData] = useState<string>("1");
    const [selectValue, setSelectValue] = useState<string>(storedData); //this is the value of the select elem.
    const [bg, setBg] = useState<string>(storedData); //background colour
    const [text, setText] = useState<string>("");

    const setColors = () => {
        if (storedData === "2") {
            setBg("bg-gradient-to-br from-[#374151] via-[#f43f5e] to-red-300");
            setText("text-black");
        } else if (storedData === "3") {
            setBg(
                "bg-gradient-to-tr from-purple-100 via-purple-500 to-purple-800"
            );
            setText("text-white");
        } else if (storedData === "4") {
            setBg(
                "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d97706] via-[#d97706] to-[#c2410c]"
            );
            setText("text-black");
        } else {
            setBg("bg-gradient-to-r from-blue-400 to-blue-600");
            setText("text-white");
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const storedStyle = localStorage.getItem("style");
                if (storedStyle) {
                    setStoredData(storedStyle);
                } else {
                    setStoredData("1");
                }
                setColors();
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
        }
    }, [style, storedData, setColors]);
    useEffect(() => {
        setSelectValue(storedData); // Update selectValue whenever storedData changes
    }, [storedData]);

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
                className={` ${bg} h-[90%] w-full flex-col items-center justify-center overflow-y-auto md:h-full md:w-[95.5%]`}
            >
                <SearchBar />
                <div className="flex h-[93%] w-full flex-col pb-[1%] text-black">
                    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500">
                        <h1
                            className={`${text} mt-[2%] flex items-center justify-center text-4xl font-extrabold drop-shadow-lg`}
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
                                className={`${text} drop-shadow-lg" flex items-center justify-center text-4xl font-extrabold`}
                            >
                                DMS settings
                            </h1>
                            <h2
                                className={`${text} " mt-[1%] flex items-center justify-center text-xl font-medium`}
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
                                className={`${text} font-medium" mt-[1%] flex items-center justify-center text-xl md:mb-[1%]`}
                            >
                                Make a config
                            </h2>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label className={`${text} text-lg`}>
                                        {"Time Format"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>12-hour</option>
                                        <option>24-hour</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2 md:pl-[4%]">
                                    <label className={`${text} text-lg`}>
                                        {"Font"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Serif</option>
                                        <option>Sans-serif</option>
                                        <option>Arial</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2 md:pl-[4%]">
                                    <label className={`${text} text-lg`}>
                                        {"Font size"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label className={`${text} text-lg`}>
                                        {"Display Avatars"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label className={`${text} text-lg`}>
                                        {"Animations"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label className={`${text} text-lg`}>
                                        {"Enable notifications"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label className={`${text} text-lg`}>
                                        {"Message Bubbles"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Rounded</option>
                                        <option>Square</option>
                                        <option>None</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label className={`${text} text-lg`}>
                                        {"Message Bubble Color"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>some colors</option>
                                    </select>
                                </div>
                                <div className="flex w-full flex-row items-center justify-center space-x-2">
                                    <label className={`${text} text-lg`}>
                                        {"Enable custom chat background"}
                                    </label>
                                    <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <Button />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
