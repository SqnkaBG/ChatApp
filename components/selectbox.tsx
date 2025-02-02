import arrow from "@/components/white-down-arrow-png-2.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SelectBox = ({
    value = undefined,
    onChange = undefined,
    className,
    children,
}: {
    value: string | undefined;
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    className: string;
    children: React.ReactNode;
}) => {
    const [storedData, setStoredData] = useState("1");
    const [boxStyle, setBoxStyle] = useState<string>("");
    const [boxboxStyle, setBoxBoxStyle] = useState<string>("");

    const setColors = () => {
        if (storedData === "2") {
            setBoxStyle("bg-gray-800 text-white");
            setBoxBoxStyle("bg-gray-600");
        } else if (storedData === "3") {
            setBoxStyle("bg-gray-200 text-black");
            setBoxBoxStyle("bg-gray-400");
        } else if (storedData === "4") {
            setBoxStyle("bg-gray-800 text-white");
            setBoxBoxStyle("bg-gray-600");
        } else {
            setBoxStyle("bg-gray-200  text-black");
            setBoxBoxStyle("bg-gray-400");
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
        <div className="-translate-x-1/2 -translate-y-1/2">
            <select
                value={value}
                onChange={onChange}
                className={`${className} ${boxStyle} appearance-none border-none shadow-lg outline-none focus:outline-none`}
            >
                {children}
            </select>

            <div
                className={`${boxboxStyle} /10 hover:/20 pointer-events-none absolute right-0 top-0 flex h-full w-1/5 items-center justify-center text-3xl opacity-50 hover:opacity-60`}
            >
                <Image
                    height={90}
                    width={90}
                    src={arrow.src}
                    alt="arrow"
                    className="size-[65%]"
                />
            </div>
        </div>
    );
};

export default SelectBox;
