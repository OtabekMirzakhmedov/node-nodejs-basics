import fs from  'fs/promises';

const copy = async () => {
    const sourceDir = 'files';
    const destinationDir = 'files_copy';

    const sourceDirExists = await fs.access(sourceDir)
        .then(() => true)
        .catch(() => false);
    if (!sourceDirExists) {
        throw new Error('FS operation failed');
    }
    const destinationDirExists = await fs.access(destinationDir)
        .then(() => true)
        .catch(() => false);
    if (!destinationDirExists) {
        await fs.mkdir(destinationDir);
    } else {
        throw new Error('FS operation failed');
    }

    await fs.cp(sourceDir, destinationDir, { recursive: true });

};

await copy();
