'use client';
import React, { useState } from 'react';

export default function Test() {
  const [text, setText] = useState("User1");
  const [inputText, setInputText] = useState("User1");  // temp var so that the text doesn't change without pressing the button

  const handleChange = () => {
    setText(inputText);
  };
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-500 justify-center items-center space-y-3">
      <input
      type="text"
      className="flex h-[5%] w-[10%] text-black text-center"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      />
      <p className="flex text-lg text-black">{text}</p>
      <button
                type="button"
                className="ml-2 h-10 w-[10%] rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleChange}>
                Change
      </button>
    </div>
  );
}
