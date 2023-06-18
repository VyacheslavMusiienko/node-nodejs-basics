import { readdir, stat } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);
const FOLDER_NAME = 'files';

const filePath = join(currentDirPath, FOLDER_NAME);

const list = async () => {

  try {
    await stat(filePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }

  const files = await readdir(filePath);

  files.forEach((file) => {
    console.log(file);
  })
};

try {
  await list();
} catch (error) {
  console.error(error.message);
}