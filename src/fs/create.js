import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs/promises";
import path from "path";

const create = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const filePath = path.join(directoryPath, "fresh.txt");

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.writeFile(filePath, "I am fresh and young");
        console.log("File created successfully");
      } catch (writeError) {
        console.error("Error writing to file:", writeError.message);
      }
    } else {
      console.error("Error:", error.message);
    }
  }
};

await create();
