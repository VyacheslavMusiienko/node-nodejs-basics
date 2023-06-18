import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const spawnChildProcess = async (args) => {
  const child = fork(resolve(currentDirPath, "files", "script.js"), [
    ...args.slice(2)
  ]);

  child.on("message", (message) => {
    console.log("Message from child:", message.toString());
  });
};

spawnChildProcess(process.argv);
