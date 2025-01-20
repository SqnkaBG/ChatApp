import SearchBar from "@/components/searchbar";
import ShowBox from "@/components/showbox";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-wrap bg-white">
      <Sidebar />

      <div className="h-full md:w-[95.5%] w-[full] flex-col items-center justify-center bg-teal-700 w-full">
        <SearchBar />
        <ShowBox />
      </div>
    </div>
  );
}
