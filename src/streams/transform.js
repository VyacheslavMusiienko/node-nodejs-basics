import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split('').reverse().join('');
      this.push(reversedText);
      callback();
    }
  });

  stdin.pipe(reverseStream).pipe(stdout);
};

await transform();