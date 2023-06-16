import { cpus } from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const workerPath = join(dirname(fileURLToPath(import.meta.url)), 'worker.js');
const performCalculations = async () => {
  const calcNthFibonacci = (workerData) => new Promise((res) => {
    const worker = new Worker(workerPath, {workerData});
    worker.on('message', (data) => res({status: 'resolved', data}));
    worker.on('error', () => res({status: 'error', data: null}));
  });

  const calculation = new Array(cpus().length).fill(null).map((_, index) => calcNthFibonacci(index + 10));
  const data = await Promise.all(calculation);

  console.log(data);
};

await performCalculations();