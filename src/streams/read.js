import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const read = async () => {
  const filePath = join(dirname(fileURLToPath(import.meta.url)),'files','fileToRead.txt');
  const readStream = createReadStream(filePath);

  readStream.on('data', (chunk) => {
    stdout.write(chunk);
  });

  readStream.on('error', (err) => {
    console.error(`Error reading file: ${err}`);
  });
};

await read();