import { createReadStream } from 'fs';

const read = async () => {
    return new Promise((resolve, reject) => {
        const rs = createReadStream('./files/fileToRead.txt', 'utf8');
        rs.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        rs.on('end', () => {
            resolve();
        });
        rs.on('error', (err) => {
            reject(err);
        });
    });
};

await read();