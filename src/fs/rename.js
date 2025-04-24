import fs from 'fs/promises';

const rename = async () => {

    const fileExist = await fs.access('./files/wrongFilename.txt').then(() => true).catch(() => false);
    if (!fileExist) {
        throw new Error('FS operation failed');
    }
    await fs.rename('./files/wrongFilename.txt', './files/properFilename.md');
};

await rename();