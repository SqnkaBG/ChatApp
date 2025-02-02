import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function Test() {
    return (
        <div className="g-white flex h-screen max-h-screen w-full grow">
            <Sidebar />
            <div className="h-[92.6%] w-screen flex-col items-center justify-center bg-gray-300">
                <SearchBar />
                <div className="flex h-1/2 w-1/2 items-center justify-center"></div>
            </div>
        </div>
    );
}
