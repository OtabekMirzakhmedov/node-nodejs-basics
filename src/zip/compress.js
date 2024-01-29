import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import zlib from "zlib";

const compress = async () => {
  const currentModuleFile = fileURLToPath(import.meta.url);
  const directoryPath = path.join(dirname(currentModuleFile), "files");
  const filePath = path.join(directoryPath, "fileToCompress.txt");
  const inputFile = createReadStream(filePath);
  const outputFile = createWriteStream("archive.gz");

  inputFile.pipe(zlib.createGzip()).pipe(outputFile);
};

await compress();
