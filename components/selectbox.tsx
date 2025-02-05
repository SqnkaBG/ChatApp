import React, { useEffect, useState } from "react";

const SelectBox = ({
    value,
    onChange,
    className,
    children,
}: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    className: string;
    children: React.ReactNode;
}) => {
    const [storedData, setStoredData] = useState("1");
    const [boxStyle, setBoxStyle] = useState<string>("");
    const [boxboxStyle, setBoxBoxStyle] = useState<string>("");
    const [bg, setBg] = useState<string>("");
    const [text, setText] = useState<string>("");

    const setColors = () => {
        if (storedData === "2") {
            setBoxStyle("border-white");
            setBoxBoxStyle("bg-red-700");
            setBg("bg-gray-700");
            setText("text-gray-200");
        } else if (storedData === "3") {
            setBoxStyle("border-purple-700");
            setBoxBoxStyle("bg-purple-700");
            setBg("bg-white");
            setText("text-gray-600");
        } else if (storedData === "4") {
            setBoxStyle("border-orange-800");
            setBoxBoxStyle("bg-orange-700");
            setBg("bg-gray-700");
            setText("text-gray-200");
        } else {
            setBoxStyle("border-green-600");
            setBoxBoxStyle("bg-green-700");
            setBg("bg-white");
            setText("text-gray-600");
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
        <div>
            <div className="relative inline-flex self-center">
                <svg
                    className={`${boxboxStyle} pointer-events-none absolute right-0 top-0 m-2 rounded-md p-2 text-white`}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="30px"
                    height="30px"
                    viewBox="0 0 38 22"
                    version="1.1"
                >
                    <g
                        id="ZahnhelferDE—Design"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                    >
                        <g
                            id="ZahnhelferDE–Icon&amp;Asset-Download"
                            transform="translate(-539.000000, -199.000000)"
                            fill="#ffffff"
                            fillRule="nonzero"
                        >
                            {/*arrow */}
                            <g
                                id="Icon-/-ArrowRight-Copy-2"
                                transform="translate(538.000000, 183.521208)"
                            >
                                <polygon
                                    id="Path-Copy"
                                    transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                                    points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
                <select
                    value={value}
                    onChange={onChange}
                    className={`${className} ${boxStyle} ${bg} ${text} h-12 appearance-none rounded-xl border-2 pl-5 pr-10 text-lg font-bold hover:border-gray-200 focus:outline-none`}
                >
                    {children}
                </select>
            </div>
        </div>
    );
};

export default SelectBox;
