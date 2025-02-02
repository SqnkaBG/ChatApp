"use client";

import Button from "@/components/button";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Cat from "@/public/Images/cat-circle.png";
import Cat2 from "@/public/Images/cat-circle2.png";
import Dog from "@/public/Images/dog-circle.png";
import Dog2 from "@/public/Images/dog2-circle.png";
import Fish from "@/public/Images/fish-circle.png";
import Rat from "@/public/Images/rat-circle.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function Account() {
    const [style, setStyle] = useState("1");
    const images = [Cat.src, Cat2.src, Rat.src, Dog.src, Dog2.src, Fish.src];
    const [imageSrc, setImageSrc] = useState<string>(Rat.src);
    const [isVisible, setIsVisible] = useState(false);
    const [username, setUsername] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [telNumber, SetTelNumber] = useState<string>("");
    const [shadow, setShadow] = useState<string>(""); //shadows for the input element
    const [bg, setBg] = useState<string>(""); //background
    const [border, setBorder] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [storedData, setStoredData] = useState<{
        username: string | null;
        firstName: string | null;
        lastName: string | null;
        telNumber: string | null;
        imageSrc: string | null;
        style: string | null;
    }>({
        username: null,
        firstName: null,
        lastName: null,
        telNumber: null,
        imageSrc: null,
        style: null,
    });

    const setColors = () => {
        if (style === "2") {
            setShadow("shadow-custom-red border-gray-800");
            setBg("bg-gradient-to-br from-[#374151] via-[#f43f5e] to-red-300");
            setBorder("border-gray-800");
            setText("text-black");
        } else if (storedData.style === "3") {
            setShadow("shadow-custom-blue border-purple-700");
            setBg(
                "bg-gradient-to-tr from-purple-100 via-purple-500 to-purple-800"
            );
            setBorder("border-blue-700");
            setText("text-white");
        } else if (style === "4") {
            setShadow("shadow-custom-peachy border-orange-700");
            setBg(
                "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d97706] via-[#d97706] to-[#c2410c]"
            );
            setBorder("border-peach");
            setText("text-black");
        } else {
            setShadow("shadow-custom-green border-cyan-700");
            setBg(
                "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-400 via-white to-blue-600"
            );
            setBorder("border-[#127d46]");
            setText("text-white");
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setColors();
            try {
                const storedUsername = localStorage.getItem("username");
                const storedFirstName = localStorage.getItem("firstName");
                const storedLastName = localStorage.getItem("lastName");
                const storedTelNumber = localStorage.getItem("telNumber");
                const storedImg = localStorage.getItem("pfp");
                let storedStyle = localStorage.getItem("style");
                if (!storedStyle) {
                    storedStyle = "1"; // Default value if not set in localStorage
                    localStorage.setItem("style", storedStyle);
                }
                setStoredData({
                    username: storedUsername,
                    firstName: storedFirstName,
                    lastName: storedLastName,
                    telNumber: storedTelNumber,
                    imageSrc: storedImg,
                    style: storedStyle,
                });
                if (storedStyle) {
                    setStyle(storedStyle);
                }
                if (storedImg) {
                    setImageSrc(storedImg); //updates source if it finds one in localstorage
                }
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
        }
    }, [style, storedData.style]);

    const handleClick = (src: React.SetStateAction<string>) => {
        setImageSrc(src);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const dataHasChanged =
            username !== storedData.username ||
            firstName !== storedData.firstName ||
            lastName !== storedData.lastName ||
            telNumber !== storedData.telNumber ||
            style !== storedData.style ||
            imageSrc !== storedData.imageSrc;

        if (dataHasChanged) {
            if (typeof window !== "undefined") {
                try {
                    // Save data to localStorage
                    if (username) localStorage.setItem("username", username);
                    if (firstName) localStorage.setItem("firstName", firstName);
                    if (lastName) localStorage.setItem("lastName", lastName);
                    if (telNumber) localStorage.setItem("telNumber", telNumber);
                    if (imageSrc) localStorage.setItem("pfp", imageSrc);
                    setStoredData({
                        username,
                        firstName,
                        lastName,
                        telNumber,
                        imageSrc,
                        style,
                    });

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

            <div className="h-[96%] w-full flex-col items-center justify-center sm:w-[95.5%] md:h-[99%]">
                <SearchBar />
                <div
                    className={`${
                        isVisible === true ? "z-10 block" : "hidden"
                    } absolute left-5 top-56 flex h-[40%] w-[90%] transform flex-row flex-wrap justify-center rounded-xl bg-gray-900 p-[2%] lg:left-1/2 lg:top-1/2 lg:h-[20%] lg:w-[35%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-nowrap lg:items-center lg:space-x-5`}
                >
                    {Array.from({ length: images.length }, (_, index) => {
                        return (
                            <Image
                                key={index}
                                onClick={() => {
                                    handleClick(images[index]);
                                    setIsVisible(!isVisible);
                                }}
                                src={images[index]}
                                alt="pfp"
                                height={90}
                                width={90}
                                className="m-[2%] object-scale-down lg:m-0"
                            />
                        );
                    })}
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={`${isVisible === true ? "pointer-events-none blur-[2px] brightness-50" : ""} ${bg} b-0 h-f flex h-[93%] w-[100%] flex-col items-center space-y-1 overflow-y-auto pb-[1.5%] text-black`}
                >
                    <div className="mb-[7%] mt-[5%] flex h-[13%] w-[75%] flex-row items-center justify-center lg:mb-[1%] lg:mt-0 lg:h-[18%] lg:w-[40%] lg:pb-0">
                        <Image
                            src={imageSrc}
                            alt="pfp"
                            height={90}
                            width={90}
                            className="lg:w-100 mt-[4%] drop-shadow-solid"
                        />
                        <label
                            onClick={() => setIsVisible(!isVisible)}
                            className={`${storedData.style === "4" || storedData.style === "2" ? "text-gray-800 hover:text-black" : "text-gray-200 hover:text-gray-400"} mb-[25%] cursor-pointer md:mb-[10%] lg:mb-[6%]`}
                            title="Click the 'Save' button to change avatar"
                        >
                            <FaPencilAlt className="" />
                        </label>

                        <h1
                            className={`${text} ml-[2%] mt-[4%] overflow-auto text-center text-3xl font-bold md:text-4xl lg:ml-[0.5%] lg:overflow-visible`}
                        >
                            {storedData.username || "Not set yet"}
                        </h1>
                    </div>
                    <hr className={`${border} w-[70%] lg:w-[40%]`} />
                    <div className="flex h-[55%] w-[95%] flex-col items-center justify-center space-y-12 overflow-y-auto pb-[5%] pt-[5%] md:h-[45%] md:pb-[3%] md:pt-[2%] lg:w-[50%]">
                        <div className="flex h-auto w-[80%] flex-row items-center justify-center space-x-5 md:w-[90%]">
                            <label className={`${text} lg:text-lg`}>
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                pattern="[A-Za-z0-9]{3,19}"
                                placeholder={
                                    storedData.username || "Create Username"
                                }
                                onChange={(e) => setUsername(e.target.value)}
                                className={`${shadow} h-8 w-[50%] rounded border-2 border-solid pl-[0.5%] font-serif text-base text-black outline-none`}
                            />
                        </div>
                        <div className="flex h-auto w-[80%] flex-row items-center justify-center space-x-5 md:w-[90%]">
                            <label className={`${text} lg:text-lg`}>
                                First Name
                            </label>
                            <input
                                type="text"
                                value={firstName}
                                pattern="[A-Z]{1}[a-z]{3,19}"
                                placeholder={
                                    storedData.firstName || "Create First Name"
                                }
                                onChange={(e) => setFirstName(e.target.value)}
                                className={`${shadow} h-8 w-[50%] rounded border-2 border-solid pl-[0.5%] font-serif text-base text-black outline-none`}
                            />
                        </div>
                        <div className="flex h-auto w-[80%] flex-row items-center justify-center space-x-5 md:w-[90%]">
                            <label className={`${text} lg:text-lg`}>
                                Last Name
                            </label>
                            <input
                                type="text"
                                value={lastName}
                                pattern="[A-Z]{1}[a-z]{3,19}"
                                placeholder={
                                    storedData.lastName || "Create Last Name"
                                }
                                onChange={(e) => setLastName(e.target.value)}
                                className={`${shadow} h-8 w-[50%] rounded border-2 border-solid pl-[0.5%] font-serif text-base text-black outline-none`}
                            />
                        </div>
                        <div className="mr-[4.1%] flex h-auto w-[80%] flex-row items-center justify-center space-x-5 md:w-[90%]">
                            <label className={`${text} lg:text-lg`}>
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
                                className={`${shadow} h-8 w-[50%] rounded border-2 border-solid pl-[0.5%] font-serif text-base text-black outline-none`}
                            />
                        </div>
                    </div>
                    <hr
                        className={`${border} w-[70%] pb-[4%] lg:w-[40%] lg:pb-[1%]`}
                    />
                    <Button />
                </form>
            </div>
        </div>
    );
}
