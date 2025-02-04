"use client";

import Cat from "@/app/Images/cat-circle.png";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import { /*useEffect, useRef,*/ useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import contacts from "./contacts.json";

export default function Friends() {
    const [add, setAdd] = useState<boolean>(false);

    const handleAddNew = () => {
        setAdd(!add);
    };

    return (
        <div className="g-white flex h-screen max-h-screen w-full flex-grow">
            <Sidebar />

            <div className="h-[92.6%] w-screen flex-col items-center justify-center bg-gray-300">
                <SearchBar />
                <div className="flex h-full w-full flex-row bg-gray-300">
                    {/* Contacts Sidebar */}
                    <div className="flex h-[100%] w-[50%] flex-col border-r border-blue-500 bg-white shadow-lg">
                        <div className="flex h-full w-full flex-col space-y-3 overflow-y-auto p-4">
                            {contacts.map((el, index) => (
                                <div
                                    key={index}
                                    className="borderp-3 flex cursor-pointer flex-row items-center gap-4 rounded-lg text-black hover:bg-gray-200"
                                >
                                    <Image
                                        src={Cat}
                                        alt="Profile Picture"
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                    <h1 className="text-lg font-semibold">
                                        {el.name}
                                    </h1>
                                    <AiOutlineMessage />
                                    <MdGroupAdd />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleAddNew}
                            className="m-4 rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
                        >
                            Add New
                        </button>
                    </div>

                    {/* Chat Window */}
                    <div className="flex h-full w-full flex-col bg-gray-500">
                        <div className="flex flex-1 items-center justify-center text-2xl font-semibold text-white">
                            Select a contact to start chatting or to create room
                        </div>
                    </div>

                    {/* Add Contact Modal */}
                    {add == true && (
                        <form className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
                            <div className="w-80 rounded-lg bg-white p-6 shadow-xl">
                                <h2 className="mb-4 text-xl font-bold">
                                    Add New Contact
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="mb-4 w-full rounded border p-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Image URL (optional)"
                                    className="mb-4 w-full rounded border p-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Profile Picture URL (optional)"
                                    className="mb-4 w-full rounded border p-2"
                                />
                                <input
                                    type="text"
                                    placeholder="IP Address (optional)"
                                    className="mb-4 w-full rounded border p-2"
                                />
                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={handleAddNew}
                                        className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
