"use client";

import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import { useEffect, useRef, useState } from "react";

export default function Test() {
    const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(
        null
    );
    const selectedImageRef = useRef<HTMLImageElement | null>(null);

    const imageOptions = [
        "/Images/cat-circle.png",
        "/Images/dog-circle.png",
        "/Images/cat-circle2.png",
    ];
    useEffect(() => {
        const savedImage = localStorage.getItem("selectedImage");
        if (savedImage) {
            setSelectedImageUrl(savedImage);
        }
    }, []);

    // Handle image click, updating state and saving to localStorage
    const handleImageClick = (imageUrl: string) => {
        setSelectedImageUrl(imageUrl); // Update the state with the selected image URL
        localStorage.setItem("selectedImage", imageUrl); // Save the selected image to localStorage
    };
    return (
        <div className="flex h-screen w-screen flex-wrap">
            <Sidebar />
            <SearchBar />
            <div className="image-selection mx-auto mt-8 max-w-lg text-center">
                <h2 className="mb-4 text-2xl font-semibold">Select an Image</h2>
                <div className="mb-4 grid grid-cols-3 gap-4">
                    {imageOptions.map((imageUrl) => (
                        <img
                            key={imageUrl}
                            src={imageUrl}
                            alt={imageUrl}
                            className="image-option transform cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-110"
                            onClick={() => handleImageClick(imageUrl)} // Set the selected image on click
                        />
                    ))}
                </div>

                <div>
                    <p className="mb-2 text-lg font-medium">Selected Image:</p>
                    {selectedImageUrl && (
                        <img
                            ref={selectedImageRef}
                            src={selectedImageUrl}
                            alt="Selected Image"
                            className="mx-auto max-w-[200px] rounded-lg shadow-xl"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
