import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream } from "fs";
import path from "path";
import process from "process";

const read = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const filePath = path.join(directoryPath, "fileToRead.txt");

  const output = await createReadStream(filePath);
  output.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
