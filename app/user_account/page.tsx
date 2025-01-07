import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Cat from "@/app/Images/cat-circle.png";

export default function Account() {
  return (
    <div className="flex h-screen w-screen flex-wrap bg-white">
      <Sidebar />

      <div className="h-full w-[80%] flex-col items-center justify-center bg-teal-700 sm:w-[95.5%]">
        <SearchBar />
        <div className="b-0 flex-col h-[93%] w-[100%] bg-blue-300 flex items-center"> 
          <h2 className="text-xl mt-[1%] text-black">Today</h2>
          <div className="box-content h-[15%] w-[70%] bg-slate-800 mt-[0.5%] opacity-80 hover:opacity-100 flex items-center">
            <div className="ml-5 flex flex-wrap">
                    <Image
                      src={Cat}
                      alt="pfp"
                      width={50}
                      height={50}
                      className="py-2"></Image>
            </div>
            <p className="ml-[1%]"><b>Niggerfaggot</b> sent you a message.</p>
            <p className="text-sm ml-[64%]">5 minutes ago</p>
          </div>
          <div className="box-content h-[15%] w-[70%] bg-slate-800 mt-[0.5%] opacity-80 hover:opacity-100 flex items-center">
            <div className="ml-5 flex flex-wrap">
                      <Image
                        src={Cat}
                        alt="pfp"
                        width={50}
                        height={50}
                        className="py-2"></Image>
              </div>
              <p className="ml-[1%]"><b>Niggerfaggot</b> sent you a message.</p>
              <p className="text-sm ml-[64%]">15 minutes ago</p>
          </div>
          <div className="box-content h-[15%] w-[70%] bg-slate-800 mt-[0.5%] opacity-80 hover:opacity-100 flex items-center">
            <div className="ml-5 flex flex-wrap">
                      <Image
                        src={Cat}
                        alt="pfp"
                        width={50}
                        height={50}
                        className="py-2"></Image>
              </div>
              <p className="ml-[1%]"><b>Niggerfaggot</b> sent you a message.</p>
              <p className="text-sm ml-[66%]">1 hour ago</p>
          </div>
          <h2 className="text-xl mt-[1%] text-black">Yesterday</h2>
          <div className="box-content h-[15%] w-[70%] bg-slate-800 mt-[0.5%] opacity-80 hover:opacity-100 flex items-center">
            <div className="ml-5 flex flex-wrap">
                    <Image
                      src={Cat}
                      alt="pfp"
                      width={50}
                      height={50}
                      className="py-2"></Image>
            </div>
            <p className="ml-[1%] overflow-hidden "><b>Niggerfaggot</b> updated their status: "God I fucking hate niggers so much. I wish I could exterminate them. Sadly it turned out that I am 30% black and am about to commit suicide."</p>
            <p className="ml-[1%] mr-[1%] text-sm">26.12.2024</p>
          </div>
          <div className="box-content h-[15%] w-[70%] bg-slate-800 mt-[0.5%] opacity-80 hover:opacity-100 flex items-center">
          <div className="ml-5 flex flex-wrap">
                    <Image
                      src={Cat}
                      alt="pfp"
                      width={50}
                      height={50}
                      className="py-2"></Image>
            </div>
            <p className="ml-[1%] overflow-hidden "><b>Niggerfaggot</b> has sent you a friend request</p>
            <p className="ml-[61.5%] text-sm">26.12.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
//trqbva da se addne scrollbar
//cvetovete sa grozni trqbva da se smenqt
//button read all notifications da se addne i kato se natisne da se napravi opacityto da e 50%