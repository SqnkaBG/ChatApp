"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function Test2() {
    return (
        <div className="g-white flex h-screen max-h-screen w-full grow">
            <Sidebar />
            <div className="h-[92.6%] w-screen flex-col items-center justify-center bg-gray-300">
                <SearchBar />
                <div className="mb-4">
                    <h2 className="font-sans text-xl">Sans-serif (Default)</h2>
                    <p className="font-sans text-lg">
                        This text is using the default sans-serif stack, which
                        will most likely render as system-ui, Roboto, or
                        Helvetica.
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="font-serif text-xl">Serif (Default)</h2>
                    <p className="font-serif text-lg">
                        This text is using the default serif stack, which will
                        render as Georgia, Cambria, or Times New Roman.
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="font-mono text-xl">Monospace</h2>
                    <p className="font-mono text-lg">
                        This text is using a monospaced font stack (Menlo,
                        Monaco, Courier New).
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="font-times text-xl">
                        Times New Roman (Custom Font)
                    </h2>
                    <p className="font-times text-lg">
                        This text is using Times New Roman specifically, if it's
                        available on your system.
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="font-roboto text-xl">
                        Roboto (Google Font)
                    </h2>
                    <p className="font-roboto text-lg">
                        This text is using Roboto, which is loaded from Google
                        Fonts.
                    </p>
                </div>
            </div>
        </div>
    );
}
