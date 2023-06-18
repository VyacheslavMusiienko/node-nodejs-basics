import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { unlink } from 'fs/promises';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);
const targetDir = 'files';
const targetFile = 'fileToRemove.txt';

const currentDirPathDelete = join(currentDirPath, targetDir);

const remove = async () => {
  try {
    await unlink(join(currentDirPathDelete, targetFile));
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

try {
  await remove();
} catch (error) {
  console.error(error.message);
}