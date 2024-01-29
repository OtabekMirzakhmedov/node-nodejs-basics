import { fileURLToPath } from "url";
import { dirname } from "path";
import { createWriteStream } from "fs";
import path from "path";
import process from "process";

const write = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const filePath = path.join(directoryPath, "fileToWrite.txt");
  console.log('press CTRL+C to exit');
  const input = await createWriteStream(filePath);

  process.stdin.on("data", data => {
    data = data.toString();
    input.write(data);
})
};

await write();
