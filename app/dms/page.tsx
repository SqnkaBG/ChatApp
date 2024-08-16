import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
import { FaMicrophone, FaPaperclip, FaVideo } from "react-icons/fa6";
import { AiOutlineFileImage } from "react-icons/ai";

export default function Dms() {
  const User1 = [
    { text: "Hello", time: 1 },
    { text: "I hate niggers", time: 3 },
    { text: "What about you?", time: 3 },
    { text: "Bye", time: 5 },
  ];
  const Me = [
    { text: "Do you hate niggers?", time: 2 },
    { text: "I want to kill these blackies", time: 4 },
    { text: "Bye, cuz they called me for dinner", time: 4 },
  ];
  return (
    <div className="flex h-screen w-screen flex-wrap bg-white">
      <Sidebar />

      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />

        <div className="b-0 flex h-[93%] w-[100%] flex-wrap bg-gray-500">
          {/*Dm list*/}
          <div className="flex h-[100%] w-[18%] justify-start">
            <div className="flex h-[100%] w-[100%] flex-col overflow-y-auto bg-blue-300 text-black shadow-md scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
              {/* Content of the first scrollable box */}
              {Array.from({ length: 60 }, (_, index) => (
                <div key={index} className="ml-3 flex flex-wrap">
                  <Image
                    src="https://oakhammockah.com/wp-content/uploads/2017/12/cat-circle.png"
                    alt="pfp"
                    width={50}
                    height={50}
                    className="py-2"
                  />
                  <div className="ml-4 flex max-w-[60%] flex-col justify-center">
                    <h1 className="text-xl font-bold">User1</h1>
                    <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                      Last message by afafd and some additional text that will
                      be hidden if it is too long.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-[100%] w-[82%] flex-col">
            {/* Chatbox headline */}
            <div className="mb-1 flex h-[8%] w-[100%] flex-wrap">
              <div className="flex w-[50%] items-center justify-start bg-black pl-[5%] text-green-500">
                <a className="pr-3">
                  <Image
                    src="https://oakhammockah.com/wp-content/uploads/2017/12/cat-circle.png"
                    alt="cat"
                    width={50}
                    height={50}
                  />
                </a>
                <div className="flex flex-col text-center text-white">
                  <h1>User1</h1>
                  <p>Status</p>
                </div>
              </div>
              <div className="flex w-[50%] items-center justify-end bg-black pr-[2%] text-green-500">
                <div className="p-5">
                  <a>
                    <FaPhoneAlt className="text-2xl" />
                  </a>
                </div>
                <div className="p-5">
                  <a>
                    <BsCameraVideoFill className="text-2xl" />
                  </a>
                </div>
                <div className="p-5">
                  <a>
                    <IoIosInformationCircleOutline className="text-3xl text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex h-[100%] w-[100%] flex-col overflow-y-auto bg-gray-100 p-4">
              {Array.from({ length: 60 }, (_, outerIndex) => (
                <div key={outerIndex} className="text-black">
                  {Me.map((message, meIndex) =>
                    message.time == outerIndex ? (
                      <div key={meIndex} className="text-right text-black">
                        <p>Time: {message.time}</p>
                        <p>Text: {message.text}</p>
                      </div>
                    ) : null,
                  )}

                  {User1.map((message, user1Index) =>
                    message.time == outerIndex ? (
                      <div key={user1Index} className="text-left text-black">
                        <p>Time: {message.time}</p>
                        <p>Text: {message.text}</p>
                      </div>
                    ) : null,
                  )}
                </div>
              ))}
            </div>

            {/* Message box */}
            <div className="flex h-[10%] w-[100%] items-center bg-slate-800 p-2">
              {/* File attachment icon */}
              <button
                type="button"
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <FaPaperclip className="text-xl" />
              </button>

              {/* Image file icon */}
              <button
                type="button"
                className="mx-2 text-gray-400 hover:text-white focus:outline-none"
              >
                <AiOutlineFileImage className="text-xl" />
              </button>

              {/* Video message icon */}
              <button
                type="button"
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <FaVideo className="text-xl" />
              </button>

              {/* Voice message icon */}
              <button
                type="button"
                className="mx-2 text-gray-400 hover:text-white focus:outline-none"
              >
                <FaMicrophone className="text-xl" />
              </button>

              {/* Message input */}
              <input
                type="text"
                placeholder="Type a message..."
                className="h-10 flex-grow rounded-lg border-none bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Send button */}
              <button
                type="button"
                className="ml-2 h-10 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
