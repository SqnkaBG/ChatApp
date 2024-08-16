import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <div className="flex h-[7%] flex-wrap items-center justify-center py-5">
      <div className="flex w-full flex-wrap items-center justify-center">
        <div className="flex w-[30%] rounded-md bg-slate-400">
          <input
            className="flex w-full flex-grow bg-transparent text-black outline-none placeholder:text-center placeholder:text-black"
            type="text"
            placeholder="Seacrh for account, groupchat..."
          ></input>
        </div>

        <LiaSearchSolid className="ml-2" />
      </div>
    </div>
  );
};

export default SearchBar;
