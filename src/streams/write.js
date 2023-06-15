import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { exit, stdin, stdout } from 'process';
import { fileURLToPath } from 'url';

const write = async () => {
  const filePath = join(dirname(fileURLToPath(import.meta.url)),'files','fileToWrite.txt');
  const writeStream = createWriteStream(filePath);

  process.on('exit', () => {stdout.write('You\'re done!\n')});
  process.on('SIGINT', () => exit());

  stdin.pipe(writeStream);

};

await write();