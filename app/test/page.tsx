"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import Cat from "@/app/Images/cat-circle.png";
import Image from "next/image";
import contacts from "./contacts.json"
import { MdGroupAdd } from "react-icons/md";


  

export default function Test() {
    const [add, setAdd] = useState<boolean>(false);

    const handleAddNew = () =>{
        setAdd(!add)
    }
    
    return (
        <div className="g-white flex h-screen max-h-screen w-full flex-grow">
        <Sidebar />

        <div className=" w-screen flex-col items-center justify-center h-[92.6%] bg-gray-300">
            <SearchBar />
            <div className="flex h-full w-full flex-row bg-gray-300">
      {/* Contacts Sidebar */}
      <div className="flex flex-col h-[100%] w-[50%] border-r border-blue-500 bg-white shadow-lg">
        <div className="flex flex-col overflow-y-auto h-full w-full p-4 space-y-3">
          {contacts.map((el, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-4 rounded-lg borderp-3 text-black hover:bg-gray-200 cursor-pointer"
            >
              <Image
                src={Cat}
                alt="Profile Picture"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <h1 className="text-lg font-semibold">{el.name}</h1>
              <AiOutlineMessage/>
              <MdGroupAdd/>
            </div>
          ))}
        </div>
        <button
        onClick={handleAddNew}
          className="m-4 rounded bg-black py-2 px-4 text-white hover:bg-gray-800"
        >
          Add New
        </button>
      </div>

      {/* Chat Window */}
      <div className="flex flex-col bg-gray-500 h-full w-full">
        <div className="flex flex-1 items-center justify-center text-white text-2xl font-semibold">
          Select a contact to start chatting or to create room
        </div>
      </div>

      {/* Add Contact Modal */}
      {add==true&&(
        <form className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="text"
              placeholder="Profile Picture URL (optional)"
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="text"
              placeholder="IP Address (optional)"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
              onClick={handleAddNew}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
        </div>
    </div>
    )
    
}
