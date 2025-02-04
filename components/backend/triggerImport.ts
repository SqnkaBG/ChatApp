import { importMessagesFromFile } from "./importMessages";

export const triggerImport = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".txt";

    fileInput.addEventListener("change", (event) => {
        const input = event.target as HTMLInputElement;

        if (input?.files?.length) {
            const file = input.files[0];
            importMessagesFromFile(file);
        } else {
            alert("No file selected!");
        }
    });

    fileInput.click();
};
