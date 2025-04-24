import fs from 'fs/promises'

const remove = async () => {
    const fileExist = await fs.access('./files/fileToRemove.txt').then(() => true).catch(() => false);
    if (!fileExist) {
        throw new Error('FS operation failed');
    }
    await fs.unlink('./files/fileToRemove.txt');
};

await remove();