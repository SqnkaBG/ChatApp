"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Cat from "@/public/Images/cat-circle.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function Account() {
    const [imageSrc, setImageSrc] = useState<string>(Cat.src);
    const [username, setUsername] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [telNumber, SetTelNumber] = useState<string>("");
    const [storedData, setStoredData] = useState<{
        username: string | null;
        firstName: string | null;
        lastName: string | null;
        telNumber: string | null;
    }>({
        username: null,
        firstName: null,
        lastName: null,
        telNumber: null,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const storedUsername = localStorage.getItem("username");
                const storedFirstName = localStorage.getItem("firstName");
                const storedLastName = localStorage.getItem("lastName");
                const storedTelNumber = localStorage.getItem("telNumber");
                setStoredData({
                    username: storedUsername,
                    firstName: storedFirstName,
                    lastName: storedLastName,
                    telNumber: storedTelNumber,
                });
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
        }
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            // Create an object URL for the selected file
            setImageSrc(URL.createObjectURL(file));
        }
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            try {
                // Save data to localStorage
                localStorage.setItem("username", username);
                localStorage.setItem("firstName", firstName);
                localStorage.setItem("lastName", lastName);
                localStorage.setItem("telNumber", telNumber);

                // Update the stored data state
                setStoredData({
                    username,
                    firstName,
                    lastName,
                    telNumber,
                });

                // Show success message
                alert("Data saved successfully!");

                // Reload the page
                window.location.reload();
            } catch (error) {
                console.error("Error saving to localStorage:", error);
                alert("An error occurred while saving data.");
            }
        }
    };

    return (
        <div className="flex h-screen w-screen flex-wrap bg-white">
            <Sidebar />
            <div className="h-[99%] w-full flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
                <SearchBar />
                <form
                    onSubmit={handleSubmit}
                    className="b-0 h-f flex h-[93%] w-[100%] flex-col items-center space-y-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-600 via-blue-200 to-cyan-600 pb-[1.5%]"
                >
                    <div className="mb-[5%] mt-[5%] flex h-[13%] w-[40%] flex-row items-center justify-center lg:mb-[1%] lg:mt-0 lg:h-[18%]">
                        <Image
                            src={imageSrc}
                            alt="pfp"
                            height={0}
                            width={90}
                            className="lg:w-100 mt-[4%] drop-shadow-solid"
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
                            {storedData.username || "Not set yet"}
                        </h1>
                    </div>
                    <hr className="w-[70%] border-[#127d46] lg:w-[40%]" />
                    <div className="flex h-[55%] w-[95%] flex-col items-center space-y-12 overflow-y-auto pb-[5%] pt-[5%] lg:h-[45%] lg:w-[50%] lg:pb-[1%] lg:pt-[2%]">
                        <div className="flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]">
                            <label className="text-black lg:text-lg">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                placeholder={
                                    storedData.username || "Create Username"
                                }
                                onChange={(e) => setUsername(e.target.value)}
                                className="h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black shadow-custom outline-none"
                            />
                        </div>
                        <div className="flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]">
                            <label className="text-black lg:text-lg">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={firstName}
                                placeholder={
                                    storedData.firstName || "Create First Name"
                                }
                                onChange={(e) => setFirstName(e.target.value)}
                                className="h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black shadow-custom outline-none"
                            />
                        </div>
                        <div className="flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:w-[90%]">
                            <label className="text-black lg:text-lg">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={lastName}
                                placeholder={
                                    storedData.lastName || "Create Last Name"
                                }
                                onChange={(e) => setLastName(e.target.value)}
                                className="h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black shadow-custom outline-none"
                            />
                        </div>
                        <div className="mr-[10%] flex h-auto w-auto flex-row items-center justify-center space-x-5 lg:mr-[4%] lg:w-[90%]">
                            <label className="overflow-auto text-black lg:text-lg">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="username"
                                value={telNumber}
                                pattern="\+?[1-9]{1,3}[0-9]{7,14}"
                                onChange={(e) => SetTelNumber(e.target.value)}
                                placeholder={
                                    storedData.telNumber ||
                                    "Create telephone number"
                                }
                                className="h-8 w-[50%] rounded border-2 border-solid border-cyan-700 pl-[0.5%] font-serif text-base text-black shadow-custom outline-none"
                            />
                        </div>
                    </div>
                    <hr className="w-[70%] border-[#127d46] lg:w-[40%]" />
                    <div className="ml-[4%] flex h-[10%] w-[20%] flex-row justify-center pt-[5%] lg:ml-[1%] lg:pt-[1%]">
                        <button
                            type="submit"
                            className="mt-[5%] h-10 cursor-pointer rounded-lg border-b-[4px] border-cyan-800 bg-cyan-700 px-6 py-2 text-white transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 focus:outline-none active:translate-y-[2px] active:border-b-[2px] active:brightness-90 lg:mt-0 lg:w-[30%]"
                        >
                            Save{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
