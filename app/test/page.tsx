"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import Cat from "@/app/Images/cat-circle.png";
import Image from "next/image";
import contacts from "./contacts.json"

export default function Test() {
    return (
        <div className="g-white flex h-screen max-h-screen w-full flex-grow">
        <Sidebar />

        <div className=" w-screen flex-col items-center justify-center h-[92.6%] bg-gray-300">
            <SearchBar />
            <div className="flex h-full w-full flex-row bg-gray-300 ">
                <div className="flex flex-col h-[95%] w-[50%] border border-blue-500">
                <div className="flex flex-col overflow-y-auto h-full w-full border border-red-500">
                {contacts.map((el, index) => (
                    <div
                        key={index}
                        className="flex flex-row border border-green-500 text-black"
                        >
                            <Image
                                src={Cat}
                                alt="Profile Picture"
                                width={50}
                                height={50}
                                className="rounded-full object-cover"
                            />
                            <h1>{el.name}</h1>
                    </div>
                ))}
                
                </div>
                <button className="rounded flex bg-black h-[5%] w-[12%]">
                    Add new
                </button>
               
              </div> 
              <div className="flex flex-col bg-gray-500 h-[100%] w-[100%]">

            </div>
            </div>
        </div>
    </div>
    )
    
}
