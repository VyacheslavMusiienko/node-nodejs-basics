import { writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);
const filePath = join(currentDirPath, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

try {
  await create();
} catch (error) {
  console.error(error.message);
}
