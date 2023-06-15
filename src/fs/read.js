import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);
  const FOLDER_NAME = 'files';
  const VILE_NAME = 'fileToRead.txt';

  const filePath = join(currentDirPath, FOLDER_NAME, VILE_NAME);

  if(!existsSync(filePath)) {
    throw new Error('FS operation failed: ' + error.message);
  }

  const fileContent = readFileSync(filePath, 'utf8');
  console.log(fileContent);
};

try {
  await read();
} catch (error) {
  console.error(error.message);
}