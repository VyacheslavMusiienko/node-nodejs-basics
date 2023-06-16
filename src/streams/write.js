import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { stdin } from 'process';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const filePath = join(dirname(fileURLToPath(import.meta.url)),'files','fileToWrite.txt');

const write = async () => {
  const writeStream = createWriteStream(filePath);

  await pipeline(stdin, writeStream);
};

await write();