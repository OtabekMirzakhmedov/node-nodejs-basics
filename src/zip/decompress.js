import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";

const decompress = async () => {
    try {
        const gunzip = createGunzip();
        const source = createReadStream("./files/archive.gz");
        const destination = createWriteStream("./files/fileToCompress.txt");
        await pipeline(source, gunzip, destination);
    } catch (err) {
        console.error('An error occurred during decompression:', err);
        process.exitCode = 1;
        throw err;
    }
};

await decompress();