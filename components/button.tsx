import React, { useEffect, useState } from "react";

const Button = () => {
    const [storedData, setStoredData] = useState("1");
    const [buttonStyle, setButtonStyle] = useState<string>("");
    const [boxShadow, setBoxShadow] = useState<string>("");

    const setColors = () => {
        if (storedData === "2") {
            setButtonStyle("bg-[#1a1a1a] border-dark-red text-[#eee]");
            setBoxShadow("0 0 0 2px rgb(124, 3, 3)");
        } else if (storedData === "3") {
            setButtonStyle("border-purple-800 bg-blue-500 text-white");
            setBoxShadow("0 0 0 2px rgb(107, 33, 168)");
        } else if (storedData === "4") {
            setButtonStyle("border-orange-700 bg-gray-800 text-white");
            setBoxShadow("0 0 0 2px rgb(194, 65, 12)");
        } else {
            setButtonStyle("border-blue-600 bg-green-700 text-white");
            setBoxShadow("0 0 0 2px rgb(37, 99, 235)");
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                setColors();
                const storedStyle = localStorage.getItem("style");
                if (storedStyle) {
                    setStoredData(storedStyle);
                } else {
                    setStoredData("1");
                }
            } catch (error) {
                console.error("Error accessing localStorage:", error);
            }
        }
    }, [storedData, setStoredData]);

    return (
        <button
            type="submit"
            className={`${
                buttonStyle
            } m-[-8%] h-11 cursor-pointer rounded-md border-b-[6px] px-6 py-2 text-lg outline-none transition-all hover:-translate-y-px hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-red-900 active:translate-y-[2px] active:border-b-2 active:brightness-90 lg:mt-0 lg:w-[6%]`}
            style={{
                boxShadow: boxShadow,
            }}
        >
            Save
        </button>
    );
};
export default Button;
