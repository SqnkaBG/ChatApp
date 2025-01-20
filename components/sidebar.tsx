import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuHome } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
    return (
        <div className="fixed bottom-0 flex h-[10%] w-full flex-row items-center justify-center bg-[#00cc77] sm:w-[4.5%] md:static md:h-full md:w-[4.5%] md:flex-col">
            <div className="flex h-[80%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/"
                >
                    <LuHome className="h-[80%] w-[80%]" />
                </a>
            </div>

            <div className="flex h-[100%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/friends"
                >
                    <LiaUserFriendsSolid className="h-[80%] w-[80%]" />
                </a>
            </div>

            <div className="flex h-[70%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/dms"
                >
                    <FaRegMessage className="h-[80%] w-[80%]" />
                </a>
            </div>

            <div className="flex h-[80%] w-full items-center justify-center md:h-[10%]">
                <a
                    className="flex h-full w-full items-center justify-center"
                    href="/user_account"
                >
                    <VscAccount className="h-[80%] w-[80%]" />
                </a>
            </div>

            <div className="flex h-[80%] w-full items-center justify-center md:h-[10%]">
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
