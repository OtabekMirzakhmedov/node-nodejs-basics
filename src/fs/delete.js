import { fileURLToPath } from "url";
import { dirname } from "path";
import { access, constants, unlink } from "node:fs/promises"; // Importing the promises version
import path from "path";

const remove = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const filePath = path.join(directoryPath, "fileToRemove.txt");

  try {
    await access(filePath, constants.F_OK);
    await unlink(filePath);
    console.log("File removed successfully");
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error('Failed to remove file:', error);
      throw new Error('Failed to remove file');
    }
  }
};

await remove();
