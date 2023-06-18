import { createReadStream, createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);
const filePath = join(currentDirPath, 'files', 'fileToCompress.txt');
const filePathZip = join(currentDirPath, 'files', 'archive.gz');

const decompress = async () => {
  await pipeline(createReadStream(filePathZip), createGunzip(), createWriteStream(filePath));
};

await decompress();