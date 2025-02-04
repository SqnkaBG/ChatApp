"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function Test2() {
    return (
        <div className="g-white flex h-screen max-h-screen w-full grow">
            <Sidebar />
            <div className="h-[92.6%] w-screen flex-col items-center justify-center bg-gray-300">
                <SearchBar />
            </div>
        </div>
    );
}
