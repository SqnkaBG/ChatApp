"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";

export default function Test() {
    // State to manage form inputs and stored data
    const [username, setUsername] = useState<string>("");
    const [picName, setPicName] = useState<string>("");
    const [storedData, setStoredData] = useState<{
        username: string | null;
        picName: string | null;
    }>({
        username: null,
        picName: null,
    });

    // Load stored data from localStorage on page load
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const storedUsername = localStorage.getItem("username");
                const storedPicName = localStorage.getItem("picName");
                setStoredData({
                    username: storedUsername,
                    picName: storedPicName,
                });
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
        }
    }, []);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            try {
                // Save data to localStorage
                localStorage.setItem("username", username);
                localStorage.setItem("picName", picName);
                // Update the stored data state
                setStoredData({ username, picName });
            } catch (error) {
                console.error("Error saving to localStorage:", error);
            }
        }
    };

    return (
        <div className="flex h-screen w-screen flex-wrap">
            <Sidebar />
            <SearchBar />

            <div className="flex w-full flex-col items-center justify-center p-4">
                <h1 className="mb-4 text-xl font-bold">
                    Save Username and Picture Name
                </h1>

                {/* Form for username and pic name */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm rounded-md bg-gray-100 p-4 shadow-lg"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-green-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="picName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Picture Name
                        </label>
                        <input
                            type="text"
                            id="picName"
                            value={picName}
                            onChange={(e) => setPicName(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-green-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
                    >
                        Save
                    </button>
                </form>

                {/* Display stored data */}
                <div className="mt-6">
                    <h2 className="font-semibold">Stored Data:</h2>
                    <p>Username: {storedData.username || "Not set"}</p>
                    <p>Picture Name: {storedData.picName || "Not set"}</p>
                </div>
            </div>
        </div>
    );
}
