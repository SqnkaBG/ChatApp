import React, { useEffect, useState } from "react";

const Button = () => {
    const [storedData, setStoredData] = useState("1");
    const [buttonStyle, setButtonStyle] = useState<string>("");

    const setColors = () => {
        if (storedData === "2")
            setButtonStyle("border-red-900 bg-red-800 text-black");
        else if (storedData === "3")
            setButtonStyle("border-blue-800 bg-blue-700 text-white");
        else if (storedData === "4")
            setButtonStyle("border-peach bg-light-peach text-black");
        else setButtonStyle("border-green-800 bg-green-700 text-white");
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
            } m-[-8%] h-10 cursor-pointer rounded-lg border-b-[4px] px-6 py-2 transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 focus:outline-none active:translate-y-[2px] active:border-b-[2px] active:brightness-90 lg:mt-0 lg:w-[5%]`}
        >
            Save{" "}
        </button>
    );
};
export default Button;
