import { readFile, stat } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);
const FOLDER_NAME = 'files';
const VILE_NAME = 'fileToRead.txt';

const filePath = join(currentDirPath, FOLDER_NAME, VILE_NAME);

const read = async () => {

  try {
    await stat(filePath);
    const fileContent = await readFile(filePath, 'utf8');
    console.log(fileContent);
  } catch (error) {
    throw new Error('FS operation failed');
  }

};

try {
  await read();
} catch (error) {
  console.error(error.message);
}