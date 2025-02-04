import Dexie from "dexie";

const db = new Dexie("ChatAppDB");

db.version(1).stores({
    messages: "++id, content, timestamp",
});

export const messagesTable = db.table("messages");
export default db;
