import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                "custom-green": "3px 4px 0px 1px rgb(39, 129, 36)",
                "custom-red": "3px 4px 0px 1px rgb(124, 3, 3)",
                "custom-blue": "3px 4px 0px 1px rgb(61, 74, 255)",
                "custom-peachy": "3px 4px 0px 1px rgb(233, 180, 149)",
                "custom-inset": "inset 2px 4px 7px 2px #444343",
                solid: "0 4px 8px rgba(0, 0, 0, 0.8)",
            },
            dropShadow: {
                solid: "5px 4px 5px rgba(0, 0, 0, 0.8)",
            },
            colors: {
                peach: "#edb889",
                "light-peach": "#f4c79f",
            },
        },
    },
    plugins: [],
};
export default config;
