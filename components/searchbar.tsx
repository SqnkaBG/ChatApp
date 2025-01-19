import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <div className="h-[8%] w-full flex-col items-center justify-center bg-teal-700 md:w-[95.5%] py-[1%]">
      <div className="flex w-full flex-wrap items-center justify-center items-center ">
        <div className="flex w-[30%] rounded-md bg-slate-400">
          <input
            className="flex w-full bg-transparent text-black outline-none placeholder:text-center placeholder:text-black"
            type="text"
            placeholder="Search for account, groupchat..."
          ></input>
        </div>

        <LiaSearchSolid className="ml-2" />
      </div>
    </div>
  );
};

export default SearchBar;
