import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { rename as renameFile, stat } from 'fs/promises';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);
const targetDir = 'files';
const sourceFile = 'wrongFilename.txt';
const targetFile = 'properFilename.md';
const sourcePath = join(currentDirPath, targetDir, sourceFile);
const targetPath = join(currentDirPath, targetDir, targetFile);

const rename = async () => {
  try {
    await stat(sourcePath);
    await renameFile(sourcePath, targetPath);

    console.log(`File ${sourceFile} successfully renamed to ${targetFile}`);
  } catch (error) {
    throw new Error('FS operation failed: Source file does not exist');
  }
};

try {
  await rename();
} catch (error) {
  console.error(error.message);
}