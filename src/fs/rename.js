import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, renameSync } from 'fs';

const rename = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentDirPath = dirname(currentFilePath);
  const targetDir = 'files';
  const sourceFile = 'wrongFilename.txt';
  const targetFile = 'properFilename.md';

  const sourcePath = join(currentDirPath, targetDir, sourceFile);
  const targetPath = join(currentDirPath, targetDir, targetFile);

  if (!existsSync(sourcePath)) {
    throw new Error('FS operation failed: Source file does not exist');
  }

  renameSync(sourcePath, targetPath);

  console.log(`File ${sourceFile} successfully renamed to ${targetFile}`);
};

try {
  await rename();
} catch (error) {
  console.error(error.message);
}