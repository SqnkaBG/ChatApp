import { messagesTable } from "@/lib/database";

export const exportMessagestoFile = async () => {
    const messages = await messagesTable.toArray();

    const messageString = messages
        .map(
            (msg) =>
                `${new Date(msg.timestamp).toLocaleString()}: ${msg.content}`
        ) // Format timestamp to readable format
        .join("\n");

    const blob = new Blob([messageString], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "messages.txt";
    a.click();
    URL.revokeObjectURL(url);
};
