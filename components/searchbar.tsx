import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
    return (
        <div className="flex h-[10%] w-[100%] flex-wrap items-center justify-center bg-teal-700 md:h-[8%] md:w-[95.5%]">
            <div className="flex w-[30%] rounded-md bg-slate-400 transition-all duration-300 focus-within:w-[80%] hover:w-[80%] active:w-[80%] md:w-[30%] md:focus-within:w-[30%] md:hover:w-[30%] md:active:w-[30%]">
                <input
                    className="flex w-full bg-transparent text-black outline-none placeholder:text-center placeholder:text-black"
                    type="text"
                    placeholder="Search for account, groupchat..."
                />
            </div>

            <LiaSearchSolid className="ml-2" />
        </div>
    );
};

export default SearchBar;
