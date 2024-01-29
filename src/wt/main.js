import { Worker, isMainThread } from 'worker_threads';
import os from 'os';

const createWorker = (data) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./wt/worker.js', { workerData: data });
        worker.on('message', (result) => {
            resolve(result);
        });

        worker.on('error', (error) => {
            reject(error);
        });
    });
};

const createWorkers = (numWorkers) => {
    const workers = [];

    for (let i = 0; i < numWorkers; i++) {
        const dataToSend = i + 10;
        const workerPromise = createWorker(dataToSend);
        workers.push(workerPromise);
    }

    return workers;
};

const performCalculations = async () => {
    if (isMainThread) {
        const numCPUs = os.cpus().length;
        const workers = createWorkers(numCPUs);

        try {
            const results = await Promise.all(workers);
            console.log(results);
        } catch (error) {
            console.error(error);
        }
    }
};

await performCalculations();
