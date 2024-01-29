import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const baseDirectory = dirname(currentModuleFile);
  const sourceFolder = path.join(baseDirectory, "files");
  const destinationFolder = path.join(baseDirectory, "files_copy");

  try {
    await fs.access(sourceFolder, fs.constants.F_OK);
    try {
      await fs.access(destinationFolder, fs.constants.F_OK);
      throw new Error("FS operation failed: Destination folder already exists");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.mkdir(destinationFolder);
        const files = await fs.readdir(sourceFolder);
        for (const file of files) {
          const sourceFilePath = path.join(sourceFolder, file);
          const destinationFilePath = path.join(destinationFolder, file);
          await fs.copyFile(sourceFilePath, destinationFilePath);
        }
        console.log("Files copied successfully.");
      } else {
        throw err;
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed: Source folder not found");
    } else {
      throw error;
    }
  }
};

await copy();
