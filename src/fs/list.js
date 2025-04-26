import fs from 'fs/promises'

const list = async () => {
    const folderExist = await fs.access('./files').then(() => true).catch(() => false);
    if (!folderExist) {
        throw new Error('FS operation failed');
    }
    const files = await fs.readdir('./files');
    console.log(files);
};

await list();