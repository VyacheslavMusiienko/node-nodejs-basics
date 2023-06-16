import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { stdout } from 'process';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const filePath = join(dirname(fileURLToPath(import.meta.url)),'files','fileToRead.txt');

const read = async () => {
  await pipeline(createReadStream(filePath), stdout)
};

await read();