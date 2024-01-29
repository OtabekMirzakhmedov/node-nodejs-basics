import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs/promises";
import path from "path";
const rename = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const wrongFilePath = path.join(directoryPath, "wrongFilename.txt");
  const properFilePath = path.join(directoryPath, "properFilename.txt");

  try {
    await fs.rename(wrongFilePath, properFilePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw error;
    }
  }
};

await rename();
