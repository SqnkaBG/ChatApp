"use client";

//import {settings} from "@/app/settings/config";
import Button from "@/components/button";
import SearchBar from "@/components/searchbar";
import SelectBox from "@/components/selectbox";
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
            setBg("bg-gradient-to-br from-pink-200  to-rose-500");
            setText("text-black");
        } else {
            setBg(
                "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-400 via-white to-blue-600"
            );
            setText("text-white");
        }
    };

    /*  const setSetting = () => {
    } */

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
    }, [style, storedData]);
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
                className={`${bg} h-[90%] w-full flex-col items-center justify-center overflow-y-auto md:h-full md:w-[95.5%]`}
            >
                <SearchBar />
                <div className="flex h-[93%] w-full flex-col text-black">
                    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500">
                        <h1
                            className={`${text} mt-[7%] flex items-center justify-center text-4xl font-extrabold drop-shadow-lg md:mt-[2%]`}
                        >
                            Change style
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="mb-[5%] lg:mb-[1%]"
                        >
                            <div className="mt-4 flex flex-row justify-center">
                                <SelectBox
                                    value={selectValue}
                                    onChange={(e) => {
                                        setStyle(e.target.value);
                                        setSelectValue(e.target.value);
                                    }}
                                    className="w-60"
                                >
                                    <option value="1">Blue/Green</option>
                                    <option value="2">Red/Black</option>
                                    <option value="3">Purple/Blue</option>
                                    <option value="4">Orange/Pink</option>
                                </SelectBox>
                            </div>
                            <hr className="my-7 border-gray-400" />

                            <h1
                                className={`${text} flex items-center justify-center text-4xl font-extrabold drop-shadow-lg`}
                            >
                                DMS settings
                            </h1>
                            <h2
                                className={`${text} mt-[1%] flex items-center justify-center text-xl font-medium drop-shadow-lg`}
                            >
                                Upload config from file
                            </h2>

                            <div className="flex flex-col items-center justify-center space-y-4">
                                <input
                                    type="file"
                                    accept=".js"
                                    className="mt-2 rounded-xl border border-gray-800 bg-white px-4 py-3 text-sm text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <h2
                                    className={`${text} mt-[1%] flex items-center justify-center text-xl font-medium drop-shadow-lg md:mb-[1%]`}
                                >
                                    Make a config
                                </h2>
                                <div className="flex w-[35%] flex-col space-y-4 pb-[5%] md:pb-[1%]">
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Time Format
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>12-hour</option>
                                            <option>24-hour</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Font
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>Serif</option>
                                            <option>Sans-serif</option>
                                            <option>Arial</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Font size
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Display Avatars
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>Yes</option>
                                            <option>No</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Animations
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>Yes</option>
                                            <option>No</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Enable notifications
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>Yes</option>
                                            <option>No</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Message Bubbles
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>Rounded</option>
                                            <option>Square</option>
                                            <option>None</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label className={`${text} text-lg`}>
                                            Message Bubble Color
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>colors</option>
                                        </SelectBox>
                                    </div>
                                    <div className="flex flex-col items-center justify-between md:flex-row">
                                        <label
                                            className={`${text} text-lg drop-shadow-lg`}
                                        >
                                            Enable custom chat background
                                        </label>
                                        <SelectBox
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            className="w-40"
                                            value=""
                                        >
                                            <option>Yes</option>
                                            <option>No</option>
                                        </SelectBox>
                                    </div>
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
