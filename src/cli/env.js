import { env } from 'process';

const parseEnv = () => {
  const prefix = 'RSS_';
  const envVariables = Object.entries(env);
  
  envVariables.forEach(([key, value]) => {
    if (key.startsWith(prefix)) {
      const variableName = key.substring(prefix.length);
      console.log(`RSS_${variableName}=${value}`);
    }
  });
};

parseEnv();