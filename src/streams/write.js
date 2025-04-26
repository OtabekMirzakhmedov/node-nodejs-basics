import { createWriteStream} from "fs";

const write = async () => {
    return new Promise((resolve, reject) => {
        const ws = createWriteStream('./files/fileToWrite.txt');
            process.stdin.on('data', (chunk) => {
                ws.write(chunk);
            });
            process.stdin.on('end', () => {
                ws.end();
                resolve();
            });
            process.stdin.on('error', (err) => {
                reject(err);
            });

            ws.on('error', (err) => {
                reject(err);
            });
    });
};

await write();