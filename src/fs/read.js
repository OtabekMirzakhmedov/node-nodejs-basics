import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFile } from "node:fs";
import path from "path";

const read = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const filePath = path.join(directoryPath, "fileToRead.txt");
  readFile(filePath,'utf8', (err, data) => {
    if (err) throw new Error('FS operation failed');
    console.log(data);
  });
};

await read();
