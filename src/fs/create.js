import { existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const currentFilePath = fileURLToPath(import.meta.url);
    const currentDirPath = dirname(currentFilePath);
    const filePath = join(currentDirPath, 'files', 'fresh.txt');

    if (existsSync(filePath)) {
      throw new Error('FS operation failed: File already exists');
    }

    writeFileSync(filePath, 'I am fresh and young');

    console.log('Fresh file created successfully!');
};

try {
  await create();
} catch (error) {
  console.error(error.message);
}
