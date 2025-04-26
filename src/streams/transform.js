const transform = async () => {
    return new Promise((resolve, reject) => {
        process.stdin.on('data', (chunk) => {
            try {
                const reversedChunk = chunk.toString().split('').reverse().join('');
                process.stdout.write(reversedChunk);
            } catch (error) {
                reject(error);
            }
        });

        process.stdin.on('end', () => {
            resolve();
        });

        process.stdin.on('error', (err) => {
            reject(err);
        });
    });
};

await transform();