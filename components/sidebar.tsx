import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { LiaUserFriendsSolid } from "react-icons/lia";

const Sidebar = () => {
  return (
    <div className="flex md:h-full md:w-[4.5%] md:flex-col items-center justify-center bg-[#00cc77] sm:w-[4.5%] flex-row h-[10%] w-full md:static absolute bottom-0">
      <div className="flex md:h-[10%] h-[80%] w-full items-center justify-center">
        <a className="flex h-full w-full items-center justify-center" href="/">
          <LuHome className="h-[80%] w-[80%]" />
        </a>
      </div>

      <div className="flex md:h-[10%] h-[100%] w-full items-center justify-center">
        <a
          className="flex h-full w-full items-center justify-center"
          href="/friends"
        >
          <LiaUserFriendsSolid className="h-[80%] w-[80%]" />
        </a>
      </div>

      <div className="flex md:h-[10%] h-[70%] w-full items-center justify-center">
        <a
          className="flex h-full w-full items-center justify-center"
          href="/dms"
        >
          <FaRegMessage className="h-[80%] w-[80%]" />
        </a>
      </div>

      <div className="flex md:h-[10%] h-[80%] w-full items-center justify-center">
        <a
          className="flex h-full w-full items-center justify-center"
          href="/user_account"
        >
          <VscAccount className="h-[80%] w-[80%]" />
        </a>
      </div>

      <div className="flex md:h-[10%] h-[80%] w-full items-center justify-center">
        <a
          className="flex h-full w-full items-center justify-center"
          href="/settings"
        >
          <IoSettingsOutline className="h-[80%] w-[80%]" />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
