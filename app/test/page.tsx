"use client";

import { exportMessagestoFile } from "@/components/backend/exportMessages";
import { triggerImport } from "@/components/backend/triggerImport";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import { messagesTable } from "@/lib/database";
import { useEffect, useState } from "react";

export default function Test() {
    const [messages, setMessages] = useState<
        { content: string; timestamp: number }[]
    >([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const fetchMessages = async () => {
            const allMessages = await messagesTable.toArray();
            setMessages(allMessages);
        };

        fetchMessages();
    }, []);

    const handleAddMessage = async () => {
        if (newMessage.trim()) {
            const message = { content: newMessage, timestamp: Date.now() };
            await messagesTable.add(message);
            setMessages((prev) => [...prev, message]);
            setNewMessage("");
        }
    };

    // Detect "Enter" key press
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleAddMessage();
        }
    };
    const testExport = () => {
        exportMessagestoFile();
    };
    const testImport = () => {
        triggerImport();
    };

    return (
        <div className="g-white flex h-screen max-h-screen w-full grow">
            <Sidebar />
            <div className="h-full w-screen flex-col items-center justify-center bg-gray-300">
                <SearchBar />
                <div className="text-black">
                    <h1>Messages</h1>
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>
                                {msg.content}{" "}
                                <small>
                                    {new Date(msg.timestamp).toLocaleTimeString(
                                        [],
                                        { hour: "2-digit", minute: "2-digit" }
                                    )}{" "}
                                </small>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message and press Enter"
                    />
                </div>
                <div>
                    <h1>Test Export/Import Messages</h1>
                    <button onClick={testExport}>Export Messages</button>
                    <button onClick={testImport}>Import Messages</button>
                </div>
            </div>
        </div>
    );
}
