import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import zlib from "zlib";
const decompress = async () => {
  const inputFile = createReadStream("archive.gz");
  const outputFile = createWriteStream("fileToCompress.txt");
  inputFile.pipe(zlib.createGunzip()).pipe(outputFile);

};

await decompress();
