import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const content = 'I am fresh and young';
    const filePath = path.join('files', 'fresh.txt');
    const fileExists = await fs.access(filePath)
        .then(() => true)
        .catch(() => false);
    if (fileExists) {
        throw new Error('FS operation failed');
    }
    await fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
    });
};

await create();