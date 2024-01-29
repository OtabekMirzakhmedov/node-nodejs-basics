import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream } from "fs";
import { createHash } from "crypto";
import path from "path";

const calculateHash = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const filePath = path.join(directoryPath, "fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const fileStream = createReadStream(filePath);
  fileStream.on("data", (data) => {
    hash.update(data);
  });

  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(`SHA-256 Hash: ${fileHash}`);
  });
};

await calculateHash();
