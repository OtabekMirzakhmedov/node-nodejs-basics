import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const numCores = cpus().length;
    console.log(`Number of CPU cores: ${numCores}`);
    const workerPath = './worker.js';
    const workerPromises = [];
    for (let i = 0; i < numCores; i++) {
        const workerData = 10 + i;
        const worker = new Worker(workerPath, {workerData});
        workerPromises.push(new Promise((resolve, reject) => {
            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
            });
            worker.on('error', (error) => {
                reject({ status: 'error', data: null });
            });
        }));
    }
    const workerResults = await Promise.allSettled(workerPromises);
    console.log(workerResults);
    return workerResults;
};

await performCalculations();