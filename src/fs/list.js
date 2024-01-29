import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs/promises";
import path from "path";

const list = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const baseDirectory = dirname(currentModuleFile);
  const sourceFolder = path.join(baseDirectory, "files");

  try {
    await fs.access(sourceFolder, fs.constants.F_OK);
    const files = await fs.readdir(sourceFolder);
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
