import { messagesTable } from "@/lib/database";

export const importMessagesFromFile = async (file: File) => {
    try {
        const text = await file.text();
        const lines = text.split("\n");

        const messages = lines
            .map((line) => {
                const [timestampStr, content] = line.split(": ");

                if (content) {
                    const timestamp = new Date(timestampStr).getTime();
                    return { timestamp, content };
                }

                return null;
            })
            .filter(Boolean);

        if (messages.length > 0) {
            await messagesTable.bulkAdd(messages);
            alert("Messages imported successfully!");
            window.location.reload();
        } else {
            alert("No valid messages found in the file.");
        }
    } catch (error) {
        alert("Failed to import messages.");
        console.error(error);
    }
};
