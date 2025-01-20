import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function Test() {
    return (
        <div className="flex h-screen w-screen flex-wrap">
            <Sidebar />
            <SearchBar />
        </div>
    );
}
