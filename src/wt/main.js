import { cpus } from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const workerPath = join(dirname(fileURLToPath(import.meta.url)), 'worker.js');

const performCalculations = async () => {
  let num= 10;

  const workers = await Promise.allSettled(cpus().map(() => {
    return new Promise( (resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: num++,
      });
      worker.on('message', msg => resolve(msg));
      worker.on('error', msg => reject(msg));
    });
  }));

  const results = workers.map(({status, value}) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null
  }));

  console.table(results);
};

await performCalculations();