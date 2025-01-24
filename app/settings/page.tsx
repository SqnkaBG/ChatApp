import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function Settings() {
    return (
        <div className="flex h-screen w-screen flex-wrap bg-white">
            <Sidebar />

            <div className="h-full w-full flex-col items-center justify-center overflow-y-auto bg-gradient-to-r from-blue-400 to-blue-600 md:w-[95.5%]">
                <SearchBar />
                <div className="flex h-[93%] w-full flex-col pb-[1%] text-black">
                    <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500">
                        {/* Title Section */}
                        <h1 className="mt-[2%] flex items-center justify-center text-4xl font-extrabold text-white drop-shadow-lg">
                            Change style
                        </h1>
                        <div className="mt-3 flex flex-row justify-center">
                            <select className="mt-[1%] rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>da</option>
                                <option>ne</option>
                            </select>
                        </div>
                        <hr className="my-6 border-gray-400" />

                        {/* DMS Settings Section */}
                        <h1 className="flex items-center justify-center text-4xl font-extrabold text-white drop-shadow-lg">
                            DMS settings
                        </h1>
                        <h2 className="mt-[1%] flex items-center justify-center text-xl font-medium text-white">
                            Upload config from file
                        </h2>

                        {/* File Input Section */}
                        <div className="ml-[8%] flex flex-row items-center justify-center">
                            <input
                                type="file"
                                className="mt-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Make Config Section */}
                        <h2 className="mt-[1%] flex items-center justify-center text-xl font-medium text-white">
                            Make a config
                        </h2>
                        <form className="flex flex-col items-center justify-center space-y-4">
                            {Array.from({ length: 23 }, (_, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex w-full flex-row items-center justify-center space-x-2"
                                    >
                                        <label className="text-lg text-white">{`Setting ${index + 1}`}</label>
                                        <select className="rounded-xl border border-gray-300 bg-white p-3 text-lg text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>da</option>
                                            <option>ne</option>
                                        </select>
                                    </div>
                                );
                            })}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-6 rounded-xl bg-green-500 px-6 py-3 text-xl font-semibold text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
