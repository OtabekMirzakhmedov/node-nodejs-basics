import { readFile, access } from 'node:fs/promises';
const read = async () => {
    const fileExist = await access('./files/fileToRead.txt').then(() => true).catch(() => false);
    if (!fileExist) {
        throw new Error('FS operation failed');
    }
    const content = await readFile('./files/fileToRead.txt', 'utf8');
    console.log(content);

};

await read();