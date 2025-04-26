import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const calculateHash = async () => {
    return new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const rs = createReadStream('./files/fileToCalculateHashFor.txt');

        rs.on('data', (chunk) => {
            hash.update(chunk);
        });

        rs.on('end', () => {
            const hashDigest = hash.digest('hex');
            console.log(hashDigest);
            resolve(hashDigest);  // Resolve the promise when done
        });

        rs.on('error', (err) => {
            reject(err);  // Reject the promise on error
        });
    });
};

await calculateHash();